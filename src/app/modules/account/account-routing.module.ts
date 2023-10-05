import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccountPage } from "./page/account/account.page";
import { PaymentMethodsPage } from "./page/payment-methods/payment-methods.page";

const routes: Routes = [
	{
		path: "account",
		component: AccountPage,
	},
	{
		path: "payment-methods",
		component: PaymentMethodsPage,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AccountRoutingModule {}
