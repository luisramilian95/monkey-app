import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginPage } from "@authentication/page/login/login.page";
import { RegisterPage } from "@authentication/page/register/register.page";
import { RecoveryPage } from "@authentication/page/recovery/recovery.page";
import { ForgetPasswordPage } from "@authentication/page/forget-password/forget-password.page";

const routes: Routes = [
	{
		path: "login",
		title: "Login",
		component: LoginPage,
	},
	{
		path: "register",
		title: "Register",
		component: RegisterPage,
	},
	{
		path: "recovery",
		title: "Recover Password",
		component: RecoveryPage,
	},
	{
		path: "forget-password",
		title: "Forget Password",
		component: ForgetPasswordPage,
	},
	{
		path: "",
		component: LoginPage,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
