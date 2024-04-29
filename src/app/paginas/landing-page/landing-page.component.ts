import { Component } from "@angular/core";
import { HomeComponent } from "../../components/home/home.component";
import { AboutComponent } from "../../components/about/about.component";
import { ActivitiesComponent } from "../../components/activities/activities.component";
import { FormularioComponent } from "../../components/formulario/formulario.component";
import { PlansComponent } from "../../components/plans/plans.component";
import { FaqComponent } from "../../components/faq/faq.component";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrl: "./landing-page.component.css",
  standalone: true,
  imports: [
    HomeComponent,
    AboutComponent,
    ActivitiesComponent,
    FormularioComponent,
    PlansComponent,
    FaqComponent,
  ],
})
export class LandingPageComponent {}
