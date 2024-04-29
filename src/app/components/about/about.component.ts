import { Component } from "@angular/core";

@Component({
  selector: "app-about",
  standalone: true,
  imports: [],
  templateUrl: "./about.component.html",
  styleUrl: "./about.component.css",
})
export class AboutComponent {
  sizeMap: number = 0;

  ngOnInit(): void {
    this.getSizeScreen();
  }
  getSizeScreen() {
    const sizeScreen = window.innerWidth;
    console.log;
    if (sizeScreen < 480) {
      this.sizeMap = 335;
    } else {
      this.sizeMap = 440;
    }
    return this.sizeMap == 440;
  }
}
