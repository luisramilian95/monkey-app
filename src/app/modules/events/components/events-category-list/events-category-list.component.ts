import { Component, OnInit } from "@angular/core";
import { Event } from "@models/ticket.interface";
import { EventsService } from "@services/events.service";

@Component({
	selector: "app-events-category-list",
	templateUrl: "./events-category-list.component.html",
	styleUrls: ["./events-category-list.component.scss"],
})
export class EventsCategoryListComponent implements OnInit {
	public events: Event[];

	constructor(private eventService: EventsService) {}

	ngOnInit() {
		this.eventService.getAllEvents().subscribe((response: any) => {
			this.events = [...response.data?.allEvents];
		});
	}
}
