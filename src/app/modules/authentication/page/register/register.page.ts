import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { SignUpModel } from "@models/authentication.interface";
import { AuthenticationService } from "@services/authentication.service";
import { ToastService } from "@services/toast.service";

@Component({
	selector: "app-register",
	templateUrl: "./register.page.html",
	styleUrls: ["./register.page.scss", "../../authentication.scss"],
})
export class RegisterPage implements OnInit {
	public registerForm = this.formBuilder.nonNullable.group({
		firstName: new FormControl("", [Validators.required]),
		lastName: new FormControl("", [Validators.required]),
		username: new FormControl("", [Validators.required]),
		email: new FormControl("", [Validators.required, Validators.email]),
		password: new FormControl("", [
			Validators.required,
			Validators.minLength(8),
		]),
	});

	constructor(
		private formBuilder: FormBuilder,
		private router: Router,
		private authService: AuthenticationService,
		private toastService: ToastService
	) {}

	ngOnInit() {}

	onSubmit() {
		if (this.registerForm.invalid) {
			this.registerForm.markAllAsTouched();
			return;
		}

		const { email, password, username, firstName, lastName } =
			this.registerForm.getRawValue();

		const signUp: SignUpModel = {
			email,
			password,
			username,
			firstName,
			lastName,
		};

		this.authService.register(signUp).subscribe({
			next: () => {
				this.router.navigate(["/authentication/login"]);
			},
			error: (response) => {
				this.toastService.presentToast(response?.error?.message);
			},
		});
	}
}
