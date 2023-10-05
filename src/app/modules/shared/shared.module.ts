import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavBarComponent } from "@shared/components/nav-bar/nav-bar.component";
import { LoaderComponent } from "./components/loader/loader.component";

@NgModule({
	declarations: [NavBarComponent, LoaderComponent],
	imports: [CommonModule],
	exports: [NavBarComponent, LoaderComponent],
})
export class SharedModule {}
