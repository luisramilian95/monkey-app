import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { TabsComponent } from "@components/tabs/tabs.component";
import { AuthenticationGuard } from "@guards/authentication.guard";

const routes: Routes = [
	{
		path: "",
		component: TabsComponent,
		children: [
			{
				path: "",
				pathMatch: "full",
				redirectTo: "home",
			},
			{
				path: "home",
				title: "Home",
				loadChildren: () =>
					import("./modules/home/home.module").then(
						(m) => m.HomePageModule
					),
			},
			{
				path: "events",
				title: "Events",
				loadChildren: () =>
					import("./modules/home/home.module").then(
						(m) => m.HomePageModule
					),
			},
			{
				path: "tickets",
				title: "Tickets",
				loadChildren: () =>
					import("./modules/ticket/ticket.module").then(
						(m) => m.TicketModule
					),
			},
			{
				path: "profile",
				title: "Profile",
				loadChildren: () =>
					import("./modules/profile/profile.module").then(
						(m) => m.ProfileModule
					),
			},
		],
	},
	{
		path: "authentication",
		loadChildren: () =>
			import("./modules/authentication/authentication.module").then(
				(m) => m.AuthenticationModule
			),
	},
	{
		path: "account",
		canActivate: [AuthenticationGuard],
		loadChildren: () =>
			import("./modules/account/account.module").then(
				(m) => m.AccountModule
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
