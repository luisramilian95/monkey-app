import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { CreditCardComponent } from "../../components/credit-card/credit-card.component";
import { CreditCard } from "@models/user.interface";
import { UserService } from "@services/user.service";
import { Subscription } from "rxjs";

@Component({
	selector: "app-payment-methods",
	templateUrl: "./payment-methods.page.html",
	styleUrls: ["./payment-methods.page.scss", "../../account.scss"],
})
export class PaymentMethodsPage implements OnInit {
	public creditCards: CreditCard[];
	public cardSubscription: Subscription;

	constructor(
		private modalCtrl: ModalController,
		private userService: UserService
	) {}

	ngOnInit() {
		this.userService.getCreditCards().subscribe((result: any) => {
			this.creditCards = [...result.data.paymentMethods];
		});
	}

	async openModal() {
		const modal = await this.modalCtrl.create({
			component: CreditCardComponent,
		});
		modal.present();

		await modal.onWillDismiss();

		this.userService.getCreditCards().subscribe((result: any) => {
			this.creditCards = [...result.data.paymentMethods];
			console.log(this.creditCards);
		});
	}
}
