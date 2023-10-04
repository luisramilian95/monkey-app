import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";

import { TabsComponent } from "@components/tabs/tabs.component";
import { GraphQLModule } from "./graphql/graphql.module";

@NgModule({
	declarations: [AppComponent, TabsComponent],
	imports: [
		BrowserModule,
		IonicModule.forRoot(),
		AppRoutingModule,
		HttpClientModule,
		GraphQLModule,
	],
	providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
	bootstrap: [AppComponent],
})
export class AppModule {}
