import { Component, OnInit } from "@angular/core";
import { PasswordGeneratorService } from "@services/password-generator.service";

@Component({
	selector: "app-tickets",
	templateUrl: "./tickets.page.html",
	styleUrls: ["./tickets.page.scss"],
})
export class TicketsPage implements OnInit {
	constructor() {}

	ngOnInit() {}

	create() {}
	public copy(value: string) {}
}
