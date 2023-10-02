import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
	{
		path: "home",
		title: "Home",
		loadChildren: () =>
			import("./modules/home/home.module").then((m) => m.HomePageModule),
	},
	{
		path: "authentication",
		loadChildren: () =>
			import("./modules/authentication/authentication.module").then(
				(m) => m.AuthenticationModule
			),
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
