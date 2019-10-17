import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { PrakDashboardParentComponent } from './prak-dashboard-parent/prak-dashboard-parent.component';
import { MatRippleModule, MatNativeDateModule } from '@angular/material/core';
import { LinksHeaderComponent } from './links-header/links-header.component';
import { CustomSearchOneComponent } from './custom-search-one/custom-search-one.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [HeaderComponent, PrakDashboardParentComponent, LinksHeaderComponent, CustomSearchOneComponent],
  imports: [
    CommonModule,
    RouterModule,

    MatToolbarModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule
  ],
  exports:[
    HeaderComponent, PrakDashboardParentComponent, LinksHeaderComponent, CustomSearchOneComponent,
  ]
})
export class ComponentsModule { }
