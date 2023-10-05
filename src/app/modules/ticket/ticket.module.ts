import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { TicketRoutingModule } from "./ticket-routing.module";
import { TicketsPage } from "./page/tickets/tickets.page";
import { TicketItemComponent } from "./components/ticket-item/ticket-item.component";
import { TicketPage } from "./page/ticket/ticket.page";
import { TicketComponent } from "src/app/modules/ticket/components/ticket/ticket.component";

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		IonicModule,
		TicketRoutingModule,
	],
	declarations: [
		TicketsPage,
		TicketItemComponent,
		TicketPage,
		TicketComponent,
	],
})
export class TicketModule {}
