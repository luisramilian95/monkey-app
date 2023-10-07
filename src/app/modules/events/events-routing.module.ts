import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EventsPage } from "./page/events/events.page";
import { PerformerPage } from "./page/performer/performer.page";
import { PurchasePage } from "./page/purchase/purchase.page";

const routes: Routes = [
	{
		path: "",
		component: EventsPage,
	},
	{
		path: "performer",
		component: PerformerPage,
	},
	{
		path: "purchase",
		component: PurchasePage,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class EventsRoutingModule {}
