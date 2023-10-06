import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "@environments/environment";
import { TokenService } from "@services/token.service";
import {
	RecoverPasswordRequestModel,
	SignInResponseModel,
	SignUpRequestModel,
} from "@models/authentication.interface";
import { from, finalize, tap, catchError } from "rxjs";
import { LoaderService } from "./loader.service";

@Injectable({
	providedIn: "root",
})
export class AuthenticationService {
	private readonly AUTH_URL = `${environment.golipass_app}/auth`;

	constructor(
		private http: HttpClient,
		private tokenService: TokenService,
		private loaderService: LoaderService
	) {}

	public login(username: string | null, password: string | null) {
		const url: string = `${this.AUTH_URL}/sign-in`;
		this.loaderService.present();
		return this.http
			.post<SignInResponseModel>(url, { username, password })
			.pipe(
				tap((response) => {
					this.tokenService.saveToken(response.accessToken);
					this.tokenService.saveRefreshToken(response.refreshToken);
				}),
				finalize(() => this.loaderService.dismiss())
			);
	}

	public register(signUp: SignUpRequestModel) {
		const url: string = `${this.AUTH_URL}/sign-up`;
		this.loaderService.present();
		return this.http
			.post(url, signUp)
			.pipe(finalize(() => this.loaderService.dismiss()));
	}

	public forgetPassword(username: string | null) {
		const url: string = `${this.AUTH_URL}/forget-password`;
		this.loaderService.present();
		return this.http
			.post(url, { username })
			.pipe(finalize(() => this.loaderService.dismiss()));
	}

	public recoverPassword(recoverPassword: RecoverPasswordRequestModel) {
		const url: string = `${this.AUTH_URL}/recover-password`;
		this.loaderService.present();
		return this.http
			.post(url, recoverPassword)
			.pipe(finalize(() => this.loaderService.dismiss()));
	}

	public refreshToken() {
		const url: string = `${this.AUTH_URL}/refresh-token`;
		const observable = from(this.tokenService.getRefreshToken());

		observable.subscribe((refreshToken) => {
			console.log(refreshToken);
			this.refreshTokenCall(refreshToken).subscribe((response) => {
				console.log(response);
			});
		});

		return from(this.tokenService.getRefreshToken());
	}

	public refreshTokenCall(refreshToken: string | null) {
		const url: string = `${this.AUTH_URL}/refresh-token`;
		return this.http.post<SignInResponseModel>(url, refreshToken).pipe(
			tap((response) => {
				console.log(response);
				this.tokenService.saveToken(response.accessToken);
				this.tokenService.saveRefreshToken(response.refreshToken);
			}),
			finalize(() => this.loaderService.dismiss()),
			catchError((error) => {
				console.log(error);
				return "";
			})
		);
	}
}
