import { Component, OnInit } from "@angular/core";
import { Ticket, TicketStatus } from "@models/ticket.interface";

@Component({
	selector: "app-ticket",
	templateUrl: "./ticket.page.html",
	styleUrls: ["./ticket.page.scss"],
})
export class TicketPage implements OnInit {
	public ticket: Ticket;

	constructor() {
		this.ticket = {
			id: "6515beb37a32274b312e8d7d",
			venue: {
				name: "Estadio de Ejercito",
			},
			event: {
				name: "Taylor Swift",
				eventType: "Music Concert",
				startTime: new Date(),
				endTime: new Date(),
			},
			zone: {
				id: "6515beb37a32274b312e8d7d",
				name: "General",
			},
			seat: {
				id: "6515beb37a32274b312e8d7d",
				name: "General",
				accessibility: false,
			},
			status: TicketStatus.OPEN,
			cost: 40,
			orderNumber: 23424234234,
		};
	}

	ngOnInit() {}
}
