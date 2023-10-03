import { Injectable } from "@angular/core";
import {
	ActivatedRouteSnapshot,
	CanActivate,
	Router,
	RouterStateSnapshot,
	UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";

import { TokenService } from "@services/token.service";

@Injectable({
	providedIn: "root",
})
export class AuthenticationGuard implements CanActivate {
	constructor(private tokenService: TokenService, private router: Router) {}

	async canActivate() {
		const token = await this.tokenService.getToken();

		if (!token) {
			this.router.navigate(["/authentication/login"]);
		}

		return true;
	}
}
