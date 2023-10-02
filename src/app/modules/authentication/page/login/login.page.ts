import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthenticationService } from "@services/authentication.service";
import { ToastService } from "@services/toast.service";

@Component({
	selector: "app-login",
	templateUrl: "./login.page.html",
	styleUrls: ["./login.page.scss", "../../authentication.scss"],
})
export class LoginPage implements OnInit {
	public loginForm = this.formBuilder.nonNullable.group({
		username: new FormControl("", [Validators.required]),
		password: new FormControl("", [
			Validators.required,
			Validators.minLength(8),
		]),
	});

	constructor(
		private formBuilder: FormBuilder,
		private route: ActivatedRoute,
		private router: Router,
		private authService: AuthenticationService,
		private toastService: ToastService
	) {}

	ngOnInit() {
		this.route.paramMap.subscribe((params) => {
			const username = params.get("username") || "";
			this.loginForm.setValue({ username, password: "" });
		});
	}

	onSubmit() {
		if (this.loginForm.invalid) {
			this.loginForm.markAllAsTouched();
			return;
		}

		const { username, password } = this.loginForm.getRawValue();

		this.authService.login(username, password).subscribe({
			next: () => {
				this.router.navigate(["/home"]);
			},
			error: (response) => {
				this.toastService.presentToast(response?.error?.message);
			},
		});
	}
}
