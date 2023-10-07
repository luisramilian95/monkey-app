import { Component, OnInit } from "@angular/core";
import { Category } from "@models/ticket.interface";
import { EventsService } from "@services/events.service";
import { LoaderService } from "@services/loader.service";
import { finalize } from "rxjs";

@Component({
	selector: "app-home",
	templateUrl: "home.page.html",
	styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
	public categories: Category[];

	constructor(
		private eventService: EventsService,
		private loaderService: LoaderService
	) {}

	ngOnInit(): void {
		this.loaderService.present();
		this.eventService
			.getCategories()
			.pipe(finalize(() => this.loaderService.dismiss()))
			.subscribe(
				(response: any) =>
					(this.categories = response?.data?.categories)
			);
	}

	refresh($event: any) {}
}
