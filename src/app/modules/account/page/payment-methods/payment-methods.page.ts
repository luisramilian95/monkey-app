import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { CreditCardComponent } from "../../components/credit-card/credit-card.component";

@Component({
	selector: "app-payment-methods",
	templateUrl: "./payment-methods.page.html",
	styleUrls: ["./payment-methods.page.scss", "../../account.scss"],
})
export class PaymentMethodsPage implements OnInit {
	constructor(private modalCtrl: ModalController) {}

	ngOnInit() {}

	async openModal() {
		const modal = await this.modalCtrl.create({
			component: CreditCardComponent,
		});
		modal.present();

		const { data, role } = await modal.onWillDismiss();

		if (role === "confirm") {
			console.log(`Hello, ${data}!`);
		}
	}
}
