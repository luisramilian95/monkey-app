import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginPage } from "./page/login/login.page";
import { RegisterPage } from "./page/register/register.page";
import { RecoveryPage } from "./page/recovery/recovery.page";
import { ForgetPasswordPage } from "./page/forget-password/forget-password.page";
import { NavBarComponent } from "../components/nav-bar/nav-bar.component";
import { PasswordInputComponent } from "../components/password-input/password-input.component";

import { AuthenticationRoutingModule } from "./authentication-routing.module";
import { ValidationCodeComponent } from "./components/validation-code/validation-code.component";

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		IonicModule,
		AuthenticationRoutingModule,
	],
	declarations: [
		LoginPage,
		RegisterPage,
		RecoveryPage,
		ForgetPasswordPage,
		NavBarComponent,
		PasswordInputComponent,
		ValidationCodeComponent,
	],
})
export class AuthenticationModule {}
