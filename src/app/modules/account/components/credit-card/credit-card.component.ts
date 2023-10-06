import { Component, OnInit } from "@angular/core";
import {
	FormBuilder,
	FormControl,
	FormGroup,
	Validators,
} from "@angular/forms";
import { ModalController } from "@ionic/angular";
import { MaskitoElementPredicateAsync, MaskitoOptions } from "@maskito/core";
import { CreditCard } from "@models/user.interface";
import { ToastService } from "@services/toast.service";
import { UserService } from "@services/user.service";

@Component({
	selector: "app-credit-card",
	templateUrl: "./credit-card.component.html",
	styleUrls: ["./credit-card.component.scss", "../../account.scss"],
})
export class CreditCardComponent implements OnInit {
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

	form = this.formBuilder.nonNullable.group({
		cardNumber: new FormControl("", [
			Validators.required,
			Validators.pattern(/(\d{4}\-){3}\d{4}/),
		]),
		expirationDate: new FormControl<string>("", [
			Validators.required,
			Validators.pattern(/(0[1-9]|1[0-2])\/(2|3)[0-9]/),
		]),
		cvv: new FormControl<string>("", [
			Validators.required,
			Validators.pattern(/\d{3}/),
		]),
		firstName: new FormControl<string>("", [
			Validators.required,
			Validators.pattern(/[a-zA-Z]+/),
		]),
		lastName: new FormControl<string>("", [
			Validators.required,
			Validators.pattern(/[a-zA-Z]+/),
		]),
	});

	constructor(
		private formBuilder: FormBuilder,
		private modalCtrl: ModalController,
		private userService: UserService,
		private toastService: ToastService
	) {}

	ngOnInit() {}

	cancel() {
		return this.modalCtrl.dismiss(null, "cancel");
	}

	confirm() {
		if (this.form.invalid) {
			this.form.markAllAsTouched();
			return;
		}

		const creditCard: CreditCard = {
			...this.form.getRawValue(),
			default: false,
		};

		this.userService.addCreditCard(creditCard).subscribe({
			next: () => {
				this.modalCtrl.dismiss();
			},
			error: (error) => {
				console.log(error);
				this.toastService.presentToast(error.message);
			},
		});
	}
}
