import { Injectable } from "@angular/core";
import { KeysResult, Preferences } from "@capacitor/preferences";
import { BehaviorSubject } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class TokenService {
	public token$ = new BehaviorSubject<string | null>(null);

	private readonly TOKEN_NAME = "GOLIPASS_TOKEN";
	private readonly REFRESH_TOKEN_NAME = "GOLIPASS_REFRESH_TOKEN";

	constructor() {}

	public async saveToken(token: string) {
		this.token$.next(token);

		await Preferences.set({
			key: this.TOKEN_NAME,
			value: token,
		});
	}

	public async saveRefreshToken(refreshToken: string) {
		if (!refreshToken) return;

		await Preferences.set({
			key: this.REFRESH_TOKEN_NAME,
			value: refreshToken,
		});
	}

	public async getToken() {
		const { value } = await Preferences.get({ key: this.TOKEN_NAME });
		this.token$.next(value);
		return value;
	}

	public async getRefreshToken() {
		try {
			const { value } = await Preferences.get({
				key: this.REFRESH_TOKEN_NAME,
			});
			return value;
		} catch (error) {
			this.token$.next(null);
			return null;
		}
	}

	public async removeToken() {
		this.token$.next(null);
		await Preferences.remove({ key: this.TOKEN_NAME });
		await Preferences.remove({ key: this.REFRESH_TOKEN_NAME });
	}
}
