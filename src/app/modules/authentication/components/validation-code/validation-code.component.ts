import { Component, Output, ViewChild, EventEmitter } from "@angular/core";
import { IonInput } from "@ionic/angular";

@Component({
	selector: "app-validation-code",
	templateUrl: "./validation-code.component.html",
	styleUrls: ["./validation-code.component.scss"],
})
export class ValidationCodeComponent {
	@Output() code: EventEmitter<string> = new EventEmitter<string>();

	@ViewChild("code1") code1: IonInput;
	@ViewChild("code2") code2: IonInput;
	@ViewChild("code3") code3: IonInput;
	@ViewChild("code4") code4: IonInput;
	@ViewChild("code5") code5: IonInput;
	@ViewChild("code6") code6: IonInput;

	public character1: number;
	public character2: number;
	public character3: number;
	public character4: number;
	public character5: number;
	public character6: number;

	constructor() {}

	nextCode(codeNumber: number, event: any) {
		if ("deleteContentBackward" === event.detail.inputType) {
			if (codeNumber == 2) this.code1.setFocus();
			if (codeNumber == 3) this.code2.setFocus();
			if (codeNumber == 4) this.code3.setFocus();
			if (codeNumber == 5) this.code4.setFocus();
			if (codeNumber == 6) this.code5.setFocus();
		} else {
			if (codeNumber == 1) this.code2.setFocus();
			if (codeNumber == 2) this.code3.setFocus();
			if (codeNumber == 3) this.code4.setFocus();
			if (codeNumber == 4) this.code5.setFocus();
			if (codeNumber == 5) this.code6.setFocus();
		}

		const code =
			`${this.character1 || "-"}` +
			`${this.character2 || "-"}` +
			`${this.character3 || "-"}` +
			`${this.character4 || "-"}` +
			`${this.character5 || "-"}` +
			`${this.character6 || "-"}`;

		this.code.emit(code);
	}
}
