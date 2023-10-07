import { Component, Input, OnInit } from "@angular/core";
import { Category, Event } from "@models/ticket.interface";
import { EventsService } from "@services/events.service";

@Component({
	selector: "app-events-category-list",
	templateUrl: "./events-category-list.component.html",
	styleUrls: ["./events-category-list.component.scss"],
})
export class EventsCategoryListComponent implements OnInit {
	@Input() category: Category;

	public events: Event[];

	constructor(private eventService: EventsService) {}

	ngOnInit() {
		this.eventService
			.getEventsByCategory(this.category.name)
			.subscribe((response: any) => {
				this.events = [...response.data?.eventsByCategoryName];
			});
	}

	goToEvents() {}
}
