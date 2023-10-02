import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "@environments/environment";
import {
	RecoverPasswordModel,
	SignUpModel,
} from "@models/authentication.interface";
import { catchError } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class AuthenticationService {
	private readonly AUTH_URL = `${environment.golipass_app}/auth`;

	constructor(private http: HttpClient) {}

	public login(username: string | null, password: string | null) {
		const url: string = `${this.AUTH_URL}/sign-in`;
		return this.http.post(url, { username, password });
	}

	public register(signUp: SignUpModel) {
		const url: string = `${this.AUTH_URL}/sign-up`;
		return this.http.post(url, signUp);
	}

	public forgetPassword(username: string | null) {
		const url: string = `${this.AUTH_URL}/forget-password`;
		return this.http.post(url, { username });
	}

	public recoverPassword(recoverPassword: RecoverPasswordModel) {
		const url: string = `${this.AUTH_URL}/recover-password`;
		return this.http.post(url, recoverPassword);
	}
}
