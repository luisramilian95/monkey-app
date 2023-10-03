import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "@environments/environment";
import { TokenService } from "@services/token.service";
import {
	RecoverPasswordRequestModel,
	SignInResponseModel,
	SignUpRequestModel,
} from "@models/authentication.interface";
import { catchError, tap } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class AuthenticationService {
	private readonly AUTH_URL = `${environment.golipass_app}/auth`;

	constructor(private http: HttpClient, private tokenService: TokenService) {}

	public login(username: string | null, password: string | null) {
		const url: string = `${this.AUTH_URL}/sign-in`;
		return this.http
			.post<SignInResponseModel>(url, { username, password })
			.pipe(
				tap((response) => {
					this.tokenService.saveToken(response.accessToken);
				})
			);
	}

	public register(signUp: SignUpRequestModel) {
		const url: string = `${this.AUTH_URL}/sign-up`;
		return this.http.post(url, signUp);
	}

	public forgetPassword(username: string | null) {
		const url: string = `${this.AUTH_URL}/forget-password`;
		return this.http.post(url, { username });
	}

	public recoverPassword(recoverPassword: RecoverPasswordRequestModel) {
		const url: string = `${this.AUTH_URL}/recover-password`;
		return this.http.post(url, recoverPassword);
	}
}
