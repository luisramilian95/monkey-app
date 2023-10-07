import { Injectable } from "@angular/core";
import { Apollo } from "apollo-angular";
import { LoaderService } from "./loader.service";
import { ALL_EVENTS_QUERY } from "../graphql/events/events.graphql";
import { finalize } from "rxjs";
import { Event } from "@models/ticket.interface";

@Injectable({
	providedIn: "root",
})
export class EventsService {
	constructor(private apollo: Apollo, private loaderService: LoaderService) {}

	public getAllEvents() {
		return this.apollo.query<Event[]>({
			query: ALL_EVENTS_QUERY,
		});
	}
}
