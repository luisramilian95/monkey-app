import { Component, OnInit } from "@angular/core";
import { TokenService } from "@services/token.service";
import { UserService } from "@services/user.service";

@Component({
	selector: "app-root",
	templateUrl: "app.component.html",
	styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit {
	constructor(
		private tokenService: TokenService,
		private userService: UserService
	) {}

	async ngOnInit() {
		this.tokenService.getToken().then((token) => {
			if (token) this.userService.getSubscribeProfile();
		});
	}
}
