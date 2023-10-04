import { Injectable } from "@angular/core";
import { Preferences } from "@capacitor/preferences";

@Injectable({
	providedIn: "root",
})
export class TokenService {
	private readonly TOKEN_NAME = "GOLIPASS_TOKEN";

	constructor() {}

	public async saveToken(token: string) {
		await Preferences.set({
			key: this.TOKEN_NAME,
			value: token,
		});
	}

	public async getToken() {
		const { value } = await Preferences.get({ key: this.TOKEN_NAME });
		return value;
	}

	public async removeToken() {
		await Preferences.remove({ key: this.TOKEN_NAME });
	}
}
