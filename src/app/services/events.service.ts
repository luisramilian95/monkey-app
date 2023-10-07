import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import { LoaderService } from "./loader.service";
import {
	ALL_CATEGORIES,
	ALL_EVENTS_QUERY,
	EVENTS_BY_NAME,
} from "../graphql/events.graphql";
import { catchError, finalize } from "rxjs";
import { Category, Event } from "@models/ticket.interface";

@Injectable({
	providedIn: "root",
})
export class EventsService {
	constructor(private apollo: Apollo, private loaderService: LoaderService) {}

	public getAllEvents() {
		return this.apollo
			.query<Event[]>({
				query: ALL_EVENTS_QUERY,
			})
			.pipe(
				finalize(() => {
					this.loaderService.dismiss();
				})
			);
	}

	public getEventsByCategory(name: string) {
		return this.apollo
			.query<Event>({
				query: EVENTS_BY_NAME,
				variables: {
					name,
				},
			})
			.pipe(finalize(() => this.loaderService.dismiss()));
	}

	public getCategories() {
		return this.apollo.watchQuery<Category[]>({
			query: ALL_CATEGORIES,
		}).valueChanges;
	}
}
