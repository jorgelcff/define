import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { BrowserModule } from "@angular/platform-browser";
import { LandingPageComponent } from "./paginas/landing-page/landing-page.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    LandingPageComponent,
    NgbModule,
    BrowserAnimationsModule,
  ],
  bootstrap: [],
})
export class AppModule {}
