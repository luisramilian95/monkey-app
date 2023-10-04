import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { MaskitoElementPredicateAsync, MaskitoOptions } from "@maskito/core";
import { User } from "@models/user.interface";
import { UserService } from "@services/user.service";
@Component({
	selector: "app-account",
	templateUrl: "./account.page.html",
	styleUrls: ["./account.page.scss", "../../account.scss"],
})
export class AccountPage implements OnInit {
	public user = {} as User;

	public form = this.formBuilder.nonNullable.group({
		firstName: new FormControl("", [Validators.required]),
		lastName: new FormControl("", [Validators.required]),
		email: new FormControl("", []),
		phone: new FormControl("", [Validators.required]),
	});

	readonly phoneMask: MaskitoOptions = {
		mask: [/\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/],
	};
	readonly maskPredicate: MaskitoElementPredicateAsync = async (el) =>
		(el as HTMLIonInputElement).getInputElement();

	constructor(
		private formBuilder: FormBuilder,
		private userService: UserService
	) {}

	ngOnInit() {
		this.userService.getProfile().subscribe(({ data }: any) => {
			this.user = data.profile;
			const { firstName, lastName, phone, email } = this.user;
			this.form.setValue({ firstName, lastName, phone, email });
		});
	}

	ngAfterViewInit() {
		this.form.get("email")?.disable({ emitEvent: false });
	}

	saveProfile() {
		if (this.form.invalid) {
			this.form.markAllAsTouched();
			return;
		}

		const { firstName, lastName, phone } = this.form.getRawValue();

		const userUpdater = { firstName, lastName, phone } as User;

		this.userService.updateProfile(userUpdater).subscribe(
			({ data }: any) => {
				this.user = { ...data.updateProfile } as User;
			},
			(error) => {
				console.log("there was an error sending the query", error);
			}
		);
	}
}
