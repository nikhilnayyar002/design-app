import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { PrakHomeZeroConnAccComponent } from './prak-home-zero-conn-acc/prak-home-zero-conn-acc.component';
import { PrakHomeWithConnAccComponent } from './prak-home-with-conn-acc/prak-home-with-conn-acc.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';
import {MatRippleModule} from '@angular/material/core';
import { ComponentsModule } from './components/components.module';


@NgModule({
  declarations: [PrakHomeZeroConnAccComponent, PrakHomeWithConnAccComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ComponentsModule,

    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatRippleModule
  ]
})
export class DashboardModule { }
