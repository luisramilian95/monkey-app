import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccountPage } from "./page/account/account.page";

const routes: Routes = [
	{
		path: "account",
		component: AccountPage,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AccountRoutingModule {}
