import { Component } from "@angular/core";
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { RouterBottomSheetComponent } from "./components/router-bottom-sheet/router-bottom-sheet.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "design-app";

  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this._bottomSheet.open(RouterBottomSheetComponent);
  }

  ngAfterViewInit(): void {
   this.removeLoaderAnimation();
  }

  /**
   * Remove the loading animation with transition
   */
  removeLoaderAnimation() {
    let animated = <HTMLElement>document.querySelector(".animated");
    animated.style.opacity = "0";
    setTimeout(() => {
      animated.parentElement.removeChild(animated);
    }, 1000);
  }
}
