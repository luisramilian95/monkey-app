import { Component, OnInit } from "@angular/core";
import { PasswordGeneratorService } from "@services/password-generator.service";

@Component({
	selector: "app-tickets",
	templateUrl: "./tickets.page.html",
	styleUrls: ["./tickets.page.scss"],
})
export class TicketsPage implements OnInit {
	public passwords: Array<any>;
	public countdown: number;
	private epochSnapshot: number;

	constructor(private passwordGenerator: PasswordGeneratorService) {
		this.passwords = [];
		this.epochSnapshot = 0;
	}

	ngOnInit() {
		this.ticker();
	}

	create() {}
	public copy(value: string) {}

	private ticker() {
		let epoch = Math.round(new Date().getTime() / 1000.0);
		//console.log("Epoch: ", epoch);

		this.countdown = 30 - (epoch % 30);

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
		[{ secret: "JBSXY5FPEJPK5PXP", title: "Amazon" }].forEach(
			(results: any) => {
				console.log("results:", results);
				this.passwords = [];

				const password = this.passwordGenerator.getOTP(results.secret);

				console.log(password);

				this.passwords.push({
					title: results.title,
					password,
				});
			}
		);
	}
}
