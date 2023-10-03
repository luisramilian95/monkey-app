import { Component, OnInit } from "@angular/core";
import { MaskitoElementPredicateAsync, MaskitoOptions } from "@maskito/core";

@Component({
	selector: "app-new-payment-method",
	templateUrl: "./new-payment-method.page.html",
	styleUrls: ["./new-payment-method.page.scss", "../../account.scss"],
})
export class NewPaymentMethodPage implements OnInit {
	readonly cardMask: MaskitoOptions = {
		mask: [
			...Array(4).fill(/\d/),
			"-",
			...Array(4).fill(/\d/),
			"-",
			...Array(4).fill(/\d/),
			"-",
			...Array(4).fill(/\d/),
		],
	};

	readonly expirationDateMask: MaskitoOptions = {
		mask: [/0|1/, /\d/, "/", /2|3/, /\d/],
	};

	readonly cvvMask: MaskitoOptions = {
		mask: [/\d/, /\d/, /\d/],
	};

	readonly maskPredicate: MaskitoElementPredicateAsync = async (el) =>
		(el as HTMLIonInputElement).getInputElement();

	constructor() {}

	ngOnInit() {}
}
