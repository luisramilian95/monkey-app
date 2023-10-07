import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "@models/user.interface";
import { TokenService } from "@services/token.service";
import { UserService } from "@services/user.service";
import { Subscription } from "rxjs";

@Component({
	selector: "app-settings",
	templateUrl: "./settings.page.html",
	styleUrls: ["./settings.page.scss"],
})
export class SettingsPage implements OnInit {
	public user = {} as User;
	public profileSubscription: Subscription;

	constructor(
		private tokenService: TokenService,
		private router: Router,
		private userService: UserService
	) {}

	ngOnInit() {
		this.userService.user$.subscribe((response: any) => {
			if (response) this.user = response.profile;
		});
	}

	async logout() {
		await this.tokenService.removeToken();
		this.router.navigate(["/authentication/login"]);
		this.profileSubscription.unsubscribe();
	}
}
