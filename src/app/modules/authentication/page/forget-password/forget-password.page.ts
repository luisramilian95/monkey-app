import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthenticationService } from "@services/authentication.service";
import { ToastService } from "@services/toast.service";

@Component({
	selector: "app-forget-password",
	templateUrl: "./forget-password.page.html",
	styleUrls: ["./forget-password.page.scss", "../../authentication.scss"],
})
export class ForgetPasswordPage implements OnInit {
	public form = this.formBuilder.nonNullable.group({
		username: new FormControl("", [Validators.required]),
	});

	constructor(
		private formBuilder: FormBuilder,
		private router: Router,
		private authService: AuthenticationService,
		private toastService: ToastService
	) {}

	ngOnInit() {}

	onSubmit() {
		if (this.form.invalid) {
			this.form.markAllAsTouched();
			return;
		}

		const { username } = this.form.getRawValue();

		this.authService.forgetPassword(username).subscribe({
			next: () => {
				this.router.navigate([
					"/authentication/recovery",
					{ username },
				]);
			},
			error: (response) => {
				this.toastService.presentToast(response?.error?.message);
			},
		});
	}
}
