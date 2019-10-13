import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { PrakDashboardParentComponent } from './prak-dashboard-parent/prak-dashboard-parent.component';
import { MatRippleModule } from '@angular/material/core';
import { LinksHeaderComponent } from './links-header/links-header.component';


@NgModule({
  declarations: [HeaderComponent, PrakDashboardParentComponent, LinksHeaderComponent],
  imports: [
    CommonModule,
    RouterModule,

    MatToolbarModule,
    MatRippleModule
  ],
  exports:[HeaderComponent, PrakDashboardParentComponent, LinksHeaderComponent]
})
export class ComponentsModule { }
