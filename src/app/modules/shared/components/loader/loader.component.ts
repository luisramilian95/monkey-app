import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "@services/authentication.service";

@Component({
	selector: "app-loader",
	templateUrl: "./loader.component.html",
	styleUrls: ["./loader.component.scss"],
})
export class LoaderComponent implements OnInit {
	constructor(private authService: AuthenticationService) {}

	ngOnInit() {}

	onClick() {
		this.authService.refreshToken();
	}
}
