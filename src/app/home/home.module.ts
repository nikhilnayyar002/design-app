import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { DatapodSignUpComponent } from './datapod-sign-up/datapod-sign-up.component';
import { DatapodVerifyEmailComponent } from './datapod-verify-email/datapod-verify-email.component';
import { DatapodSignInComponent } from './datapod-sign-in/datapod-sign-in.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DatapodVerifyEmailAltComponent } from './datapod-verify-email-alt/datapod-verify-email-alt.component';

@NgModule({
  declarations: [HomepageComponent, DatapodSignUpComponent, DatapodVerifyEmailComponent, DatapodSignInComponent, DatapodVerifyEmailAltComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class HomeModule { }
