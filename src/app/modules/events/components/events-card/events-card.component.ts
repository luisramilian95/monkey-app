import { Component, Input, OnInit } from "@angular/core";
import { Event } from "@models/ticket.interface";

@Component({
	selector: "app-events-card",
	templateUrl: "./events-card.component.html",
	styleUrls: ["./events-card.component.scss"],
})
export class EventsCardComponent implements OnInit {
	@Input() event: Event;

	constructor() {}

	ngOnInit() {}
}
