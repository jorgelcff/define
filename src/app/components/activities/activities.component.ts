import { Component, ViewChild } from "@angular/core";
import { NgbCarousel, NgbModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-activities",
  standalone: true,
  imports: [NgbModule],
  templateUrl: "./activities.component.html",
  styleUrl: "./activities.component.css",
})
export class ActivitiesComponent {
  @ViewChild("ngcarousel", { static: true }) ngCarousel!: NgbCarousel;

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
}
