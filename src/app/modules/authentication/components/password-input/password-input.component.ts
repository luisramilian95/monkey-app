import { Component, ContentChild, ElementRef } from "@angular/core";

@Component({
	selector: "app-password-input",
	templateUrl: "./password-input.component.html",
	styleUrls: ["./password-input.component.scss"],
})
export class PasswordInputComponent {
	showPassword = false;
	icon = "eye-off-outline";

	@ContentChild("password") input: ElementRef;

	constructor() {}

	toggleShow() {
		this.showPassword = !this.showPassword;
		this.icon = !this.showPassword ? "eye-off-outline" : "eye-outline";

		const type: string = this.showPassword ? "text" : "password";
		this.input.nativeElement.setAttribute("type", type);
	}
}
