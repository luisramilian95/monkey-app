import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginPage } from "@authentication/page/login/login.page";
import { RegisterPage } from "@authentication/page/register/register.page";
import { RecoveryPage } from "@authentication/page/recovery/recovery.page";
import { ForgetPasswordPage } from "@authentication/page/forget-password/forget-password.page";
import { NavBarComponent } from "@authentication/components/nav-bar/nav-bar.component";
import { PasswordInputComponent } from "@authentication/components/password-input/password-input.component";

import { AuthenticationRoutingModule } from "@authentication/authentication-routing.module";
import { ValidationCodeComponent } from "@authentication/components/validation-code/validation-code.component";

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
