import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TokenService } from "@services/token.service";

@Component({
	selector: "app-settings",
	templateUrl: "./settings.page.html",
	styleUrls: ["./settings.page.scss"],
})
export class SettingsPage implements OnInit {
	constructor(private tokenService: TokenService, private router: Router) {}

	ngOnInit() {}

	async logout() {
		await this.tokenService.removeToken();
		this.router.navigate(["/authentication/login"]);
	}
}
