import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { EventsRoutingModule } from "./events-routing.module";
import { EventsPage } from "./page/events/events.page";
import { EventsCardComponent } from "./components/events-card/events-card.component";
import { PerformerPage } from "./page/performer/performer.page";
import { EventsPerformerComponent } from "./components/events-performer/events-performer.component";
import { EventsDateComponent } from "./components/events-date/events-date.component";
import { PurchasePage } from "./page/purchase/purchase.page";

import { EventTicketsComponent } from "./components/event-tickets/event-tickets.component";

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		IonicModule,
		EventsRoutingModule,
	],
	declarations: [
		EventsPage,
		PerformerPage,
		EventsCardComponent,
		EventsPerformerComponent,
		EventsDateComponent,
		EventTicketsComponent,
		PurchasePage,
	],
})
export class EventsModule {}
