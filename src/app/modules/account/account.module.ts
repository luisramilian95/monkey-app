import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AccountRoutingModule } from "./account-routing.module";
import { AccountPage } from "./page/account/account.page";
import { PaymentMethodsPage } from "./page/payment-methods/payment-methods.page";
import { MaskitoModule } from "@maskito/angular";
import { NewPaymentMethodPage } from "./page/new-payment-method/new-payment-method.page";

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		IonicModule,
		AccountRoutingModule,
		MaskitoModule,
	],
	declarations: [AccountPage, PaymentMethodsPage, NewPaymentMethodPage],
})
export class AccountModule {}
