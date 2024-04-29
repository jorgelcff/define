import { Component } from "@angular/core";
import Typed from "typed.js";

@Component({
  selector: "app-home",
  standalone: true,
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {
  subtitle: Typed | undefined;
  ngOnInit(): void {
    this.initTyped();
  }

  initTyped() {
    const options = {
      strings: ["Um novo conceito de academia!"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    };

    this.subtitle = new Typed(".typing", options);
  }
}
