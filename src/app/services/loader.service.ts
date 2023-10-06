import { Injectable } from "@angular/core";
import { LoadingController } from "@ionic/angular";

@Injectable({
	providedIn: "root",
})
export class LoaderService {
	isLoading = false;

	private loader: HTMLIonLoadingElement;
	constructor(private loaderController: LoadingController) {}

	async present() {
		this.isLoading = true;
		return await this.loaderController.create({}).then((loader) => {
			loader.present().then(() => {
				if (!this.isLoading) {
					loader
						.dismiss()
						.then(() => console.log("abort presenting"));
				}
			});
		});
	}

	async dismiss() {
		this.isLoading = false;
		return await this.loaderController.dismiss();
	}
}
