import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TicketsPage } from "./page/tickets/tickets.page";
import { TicketPage } from "./page/ticket/ticket.page";

const routes: Routes = [
	{
		path: "",
		component: TicketsPage,
	},
	{
		path: "tickets",
		component: TicketsPage,
	},
	{
		path: "ticket",
		component: TicketPage,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class TicketRoutingModule {}
