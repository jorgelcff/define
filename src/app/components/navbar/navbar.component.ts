import { Component, OnInit, HostListener } from "@angular/core";
import { Router } from "@angular/router";
import Typed from "typed.js";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  subtitle: Typed | undefined;
  constructor(private router: Router) {}

  ngOnInit() {
    // this.getScrollYMoreThan20();
    // window.addEventListener("scroll", this.handleScroll);
    document!
      .querySelector(".scroll-up-btn")!
      .addEventListener("click", this.scrollToTop);
    // this.initTyped();
    document!
      .querySelector(".menu-btn")!
      .addEventListener("click", this.toggleMenu);

    const liItems = document.querySelectorAll(".navbar .menu li");
    liItems.forEach((li) => {
      li.addEventListener("click", this.toggleMenu);
    });
  }

  getScrollYMoreThan20() {
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    // Verifica se a posição de rolagem é maior que 20 unidades
    const scrolledMoreThan20 = scrollY > 20;

    // Retorna o valor booleano
    return scrolledMoreThan20;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  toggleMenu() {
    document.querySelector(".navbar .menu")!.classList.toggle("active");
    document.querySelector(".menu-btn i")!.classList.toggle("active");
  }
}
