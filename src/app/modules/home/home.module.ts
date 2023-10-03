import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { HomePage } from "./home.page";
import { NavBarComponent } from "src/app/modules/components/nav-bar/nav-bar.component";

import { HomePageRoutingModule } from "./home-routing.module";

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
	declarations: [HomePage, NavBarComponent],
})
export class HomePageModule {}
