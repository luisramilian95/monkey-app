import { Injectable } from "@angular/core";
import { LoadingController } from "@ionic/angular";

@Injectable({
	providedIn: "root",
})
export class LoaderService {
	constructor(private loadingCtrl: LoadingController) {}
}