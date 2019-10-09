import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-router-bottom-sheet',
  templateUrl: './router-bottom-sheet.component.html',
  styleUrls: ['./router-bottom-sheet.component.css']
})
export class RouterBottomSheetComponent  {

  constructor(private _bottomSheetRef: MatBottomSheetRef<RouterBottomSheetComponent>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}

