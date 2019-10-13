import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { PrakHomeZeroConnAccComponent } from './prak-home-zero-conn-acc/prak-home-zero-conn-acc.component';
import { PrakHomeWithConnAccComponent } from './prak-home-with-conn-acc/prak-home-with-conn-acc.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';
import {MatRippleModule} from '@angular/material/core';
import {MatStepperModule} from '@angular/material/stepper';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatSortModule} from '@angular/material/sort';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatInputModule} from '@angular/material/input';

import { ComponentsModule } from './components/components.module';
import { PrakConnGoogleAccountComponent } from './prak-conn-google-account/prak-conn-google-account.component';
import { PrakDashGoogleComponent } from './prak-dash-google/prak-dash-google.component';
import { PrakDashGooglePhotosComponent } from './prak-dash-google-photos/prak-dash-google-photos.component';
import { PrakDashGooglePurchasesComponent } from './prak-dash-google-purchases/prak-dash-google-purchases.component';


@NgModule({
  declarations: [PrakHomeZeroConnAccComponent, PrakHomeWithConnAccComponent, PrakConnGoogleAccountComponent, PrakDashGoogleComponent, PrakDashGooglePhotosComponent, PrakDashGooglePurchasesComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ComponentsModule,

    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatRippleModule,
    MatStepperModule,
    MatProgressBarModule,
    MatIconModule,
    MatButtonToggleModule,
    MatInputModule
  ]
})
export class DashboardModule { }
