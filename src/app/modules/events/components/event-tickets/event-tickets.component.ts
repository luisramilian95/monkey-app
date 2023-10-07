import { Component, OnInit } from "@angular/core";
import { EventZone } from "@models/ticket.interface";

@Component({
	selector: "app-event-tickets",
	templateUrl: "./event-tickets.component.html",
	styleUrls: ["./event-tickets.component.scss"],
})
export class EventTicketsComponent implements OnInit {
	public zone: EventZone;

	constructor() {}

	ngOnInit() {}
}
