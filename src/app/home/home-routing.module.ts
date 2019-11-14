import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { DatapodSignUpComponent } from './datapod-sign-up/datapod-sign-up.component';
import { DatapodSignInComponent } from './datapod-sign-in/datapod-sign-in.component';
import { DatapodVerifyEmailComponent } from './datapod-verify-email/datapod-verify-email.component';
import { DatapodVerifyEmailAltComponent } from './datapod-verify-email-alt/datapod-verify-email-alt.component';


const routes: Routes = [
  {
    path:"home",
    component:HomepageComponent
  },
  {
    path:"sign-up",
    component:DatapodSignUpComponent
  },
  {
    path:"sign-in",
    component:DatapodSignInComponent
  },
  {
    path:"verify-email",
    component:DatapodVerifyEmailComponent
  },
  {
    path:"verify-email-alt",
    component:DatapodVerifyEmailAltComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
