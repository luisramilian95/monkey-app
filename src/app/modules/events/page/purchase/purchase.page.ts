import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
@Component({
	selector: "app-purchase",
	templateUrl: "./purchase.page.html",
	styleUrls: ["./purchase.page.scss"],
})
export class PurchasePage implements OnInit {
	canDismiss = false;

	presentingElement: Element | null;

	constructor(private modalCtrl: ModalController) {}

	ngOnInit() {}
}
