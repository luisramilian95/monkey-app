import { Injectable } from "@angular/core";
import { ToastController } from "@ionic/angular";

@Injectable({
	providedIn: "root",
})
export class ToastService {
	constructor(private toastController: ToastController) {}

	async presentToast(message: string) {
		const toast = await this.toastController.create({
			message,
			buttons: [
				{
					icon: "close",
					htmlAttributes: {
						"aria-label": "close",
					},
				},
			],
		});
		toast.present();
	}
}
