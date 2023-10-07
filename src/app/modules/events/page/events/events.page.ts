import { Component, OnInit } from "@angular/core";
import { Event } from "@models/ticket.interface";
import { EventsService } from "@services/events.service";
import { LoaderService } from "@services/loader.service";

@Component({
	selector: "app-events",
	templateUrl: "./events.page.html",
	styleUrls: ["./events.page.scss"],
})
export class EventsPage implements OnInit {
	public events: Event[];

	constructor(
		private eventService: EventsService,
		private loaderService: LoaderService
	) {}

	ngOnInit() {
		this.loaderService.present();
		this.eventService.getAllEvents().subscribe((response: any) => {
			this.loaderService.dismiss();
			this.events = [...response.data?.allEvents];
		});
	}

	refresh(event: any) {
		this.eventService.getAllEvents().subscribe((response: any) => {
			this.events = [...response.data?.allEvents];
			event.target.complete();
		});
	}
}
