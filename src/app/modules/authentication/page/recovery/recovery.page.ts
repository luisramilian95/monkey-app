import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthenticationService } from "@services/authentication.service";
import { RecoverPasswordModel } from "@models/authentication.interface";
import { ToastService } from "@services/toast.service";
@Component({
	selector: "app-recovery",
	templateUrl: "./recovery.page.html",
	styleUrls: ["./recovery.page.scss", "../../authentication.scss"],
})
export class RecoveryPage implements OnInit {
	public username: string;
	public code: string;
	public isInvalidCode: boolean = false;

	public form = new FormGroup({
		username: new FormControl("", [Validators.required]),
		password: new FormControl("", [
			Validators.required,
			Validators.minLength(8),
		]),
	});

	constructor(
		private authService: AuthenticationService,
		private route: ActivatedRoute,
		private toastService: ToastService,
		private router: Router
	) {
		this.route.paramMap.subscribe((params) => {
			console.log(params);
			this.username = params.get("username") || "";
		});
	}

	ngOnInit() {
		if (this.username) {
			this.form.setValue({ username: this.username, password: "" });
		}
	}

	onSubmit() {
		this.isInvalidCode = !/[0-9]{6}/.test(this.code);

		if (this.form.invalid || this.isInvalidCode) {
			this.form.markAllAsTouched();
			return;
		}

		const { username, password } = this.form.getRawValue();

		const recoverPassword: RecoverPasswordModel = {
			username,
			password,
			code: this.code,
		};

		this.authService.recoverPassword(recoverPassword).subscribe({
			next: () => {
				this.toastService.presentToast("Your password was changed.");
				this.router.navigate(["/authentication/login", { username }]);
			},
			error: (response) => {
				this.toastService.presentToast(response?.error?.message);
			},
		});
	}

	codeLoader(code: string) {
		this.code = code;
	}
}
