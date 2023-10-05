import { Component, Input, OnInit } from "@angular/core";
import { Ticket } from "@models/ticket.interface";
import { DatabaseService } from "@services/database.service";
import { PasswordGeneratorService } from "@services/password-generator.service";

@Component({
	selector: "app-user-ticket",
	templateUrl: "./user-ticket.component.html",
	styleUrls: ["./user-ticket.component.scss"],
})
export class UserTicketComponent implements OnInit {
	@Input() ticket: Ticket;

	public progress = 0;

	public password: string = "adfafadsf";
	private epochSnapshot: number = 0;
	private secret: string;

	constructor(
		private databaseService: DatabaseService,
		private passwordGenerator: PasswordGeneratorService
	) {}

	ngOnInit() {
		this.databaseService
			.getTicketSecret(this.ticket.id)
			.then((result: any) => {
				this.secret = result.secret;
				const password = this.passwordGenerator.getTOTP(
					this.secret,
					true
				);
				this.password = password;
			});
		this.ticker();
	}

	private ticker() {
		let epoch = Math.round(new Date().getTime() / 1000.0);

		this.progress = 1 - (30 - (epoch % 30)) / 30;

		if (epoch % 30 == 0) {
			if (epoch > this.epochSnapshot + 5) {
				this.epochSnapshot = epoch;
				this.retrievePasswords();
			}
		}
		setTimeout(() => {
			this.ticker();
		}, 100);
	}

	private retrievePasswords() {
		const password = this.passwordGenerator.getTOTP(this.secret, false);
		this.password = password;
	}
}
