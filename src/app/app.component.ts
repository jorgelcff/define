import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NavbarModule } from "./components/navbar/navbar.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FooterComponent } from "./components/footer/footer.component";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    NavbarModule,
    NgbModule,
    FooterComponent,
  ],
})
export class AppComponent {
  constructor(private router: Router) {}
  title = "define";

  ngOnInit() {
    this.ExibirNavBar();
  }

  ExibirNavBar() {
    if (this.router.url != "") {
      return false;
    } else {
      return true;
    }
  }
}
