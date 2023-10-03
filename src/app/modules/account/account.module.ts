import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AccountRoutingModule } from "./account-routing.module";
import { AccountPage } from "./page/account/account.page";

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		IonicModule,
		AccountRoutingModule,
	],
	declarations: [AccountPage],
})
export class AccountModule {}
