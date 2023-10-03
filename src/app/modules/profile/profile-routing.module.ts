import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SettingsPage } from "@profile/page/settings/settings.page";
const routes: Routes = [
	{
		path: "",
		component: SettingsPage,
	},
	{
		path: "settings",
		component: SettingsPage,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ProfileRoutingModule {}
