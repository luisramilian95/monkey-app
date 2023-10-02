import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginPage } from "./page/login/login.page";
import { RegisterPage } from "./page/register/register.page";
import { RecoveryPage } from "./page/recovery/recovery.page";
import { ForgetPasswordPage } from "./page/forget-password/forget-password.page";

const routes: Routes = [
	{
		path: "login",
		component: LoginPage,
	},
	{
		path: "register",
		component: RegisterPage,
	},
	{
		path: "recovery",
		component: RecoveryPage,
	},
	{
		path: "forget-password",
		component: ForgetPasswordPage,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
