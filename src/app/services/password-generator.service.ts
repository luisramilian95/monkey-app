import { Injectable } from "@angular/core";
import jsSHA from "jssha";

@Injectable({
	providedIn: "root",
})
export class PasswordGeneratorService {
	private readonly BASE_32_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";

	constructor() {}

	private dec2hex(value: number) {
		return (value < 15.5 ? "0" : "") + Math.round(value).toString(16);
	}

	private hex2dec(value: string) {
		return parseInt(value, 16);
	}

	private leftPad(value: string, length: number, pad: string) {
		if (length + 1 >= value.length) {
			value = Array(length + 1 - value.length).join(pad) + value;
		}
		return value;
	}

	private base32toHex(base32: string) {
		let bits = "";
		let hex = "";
		for (let i = 0; i < base32.length; i++) {
			const val = this.BASE_32_CHARS.indexOf(
				base32.charAt(i).toUpperCase()
			);
			bits += this.leftPad(val.toString(2), 5, "0");
		}

		for (let i = 0; i + 4 <= bits.length; i += 4) {
			const chunk = bits.substring(i, i + 4);
			hex = hex + parseInt(chunk, 2).toString(16);
		}
		return hex;
	}

	public getOTP(secret: string) {
		try {
			const currentTime = new Date().getTime();

			let epoch = Math.floor(currentTime / 30000.0);

			const timeToHex = this.dec2hex(epoch);

			let key = this.leftPad(timeToHex, 16, "0");

			const secrets = this.base32toHex(secret);
			let hMac = new jsSHA("SHA-1", "TEXT");

			hMac.setHMACKey(key, "TEXT");
			hMac.update(secrets);

			const token = hMac.getHMAC("HEX");

			const hexCode = token.substring(token.length - 1);

			const offset = this.hex2dec(hexCode) * 2;

			const subToken = token.substring(offset, offset + 8);

			var otp = (this.hex2dec(subToken) & this.hex2dec("7fffffff")) + "";
			otp = otp.substring(otp.length - 6);
		} catch (error) {
			return "";
		}

		return otp;
	}
}
