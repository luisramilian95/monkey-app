import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { EventsRoutingModule } from "./events-routing.module";
import { EventsPage } from "./page/events/events.page";

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		IonicModule,
		EventsRoutingModule,
	],
	declarations: [EventsPage],
})
export class EventsModule {}
