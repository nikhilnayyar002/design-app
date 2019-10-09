import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterBottomSheetComponent } from './router-bottom-sheet/router-bottom-sheet.component';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [RouterBottomSheetComponent],
  imports: [
    CommonModule,
    RouterModule,
    
    MatListModule
  ]
})
export class ComponentsModule { }
