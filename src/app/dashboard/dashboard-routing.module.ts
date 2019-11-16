import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrakHomeZeroConnAccComponent } from './prak-home-zero-conn-acc/prak-home-zero-conn-acc.component';
import { PrakHomeWithConnAccComponent } from './prak-home-with-conn-acc/prak-home-with-conn-acc.component';
import { PrakConnGoogleAccountComponent } from './prak-conn-google-account/prak-conn-google-account.component';
import { PrakDashGoogleComponent } from './prak-dash-google/prak-dash-google.component';
import { PrakDashGooglePhotosComponent } from './prak-dash-google-photos/prak-dash-google-photos.component';
import { PrakDashGooglePurchasesComponent } from './prak-dash-google-purchases/prak-dash-google-purchases.component';
import { PrakDashGithubComponent } from './prak-dash-github/prak-dash-github.component';
import { PrakDashGithubMyRepoComponent } from './prak-dash-github-my-repo/prak-dash-github-my-repo.component';
import { PrakDashGithubStarRepoComponent } from './prak-dash-github-star-repo/prak-dash-github-star-repo.component';
import { PrakConnGithubAccountComponent } from './prak-conn-github-account/prak-conn-github-account.component';


const routes: Routes = [
  {
    path:"dashboard/prakriti-home-zero-connected-accounts",
    component:PrakHomeZeroConnAccComponent
  },
  {
    path:"dashboard/prakriti-home-with-connected-accounts",
    component:PrakHomeWithConnAccComponent
  },
  {
    path:"dashboard/prakriti-connect-google-account",
    component:PrakConnGoogleAccountComponent
  },
  {
    path:"dashboard/prakriti-dashboard-google",
    component:PrakDashGoogleComponent
  },
  {
    path:"dashboard/prakriti-dashboard-google-photos",
    component:PrakDashGooglePhotosComponent
  },
  {
    path:"dashboard/prakriti-dashboard-google-purchases",
    component:PrakDashGooglePurchasesComponent
  },
  {
    path:"dashboard/prakriti-connect-github-account",
    component:PrakConnGithubAccountComponent
  },
  {
    path:"dashboard/prakriti-dashboard-github",
    component:PrakDashGithubComponent
  },
  {
    path:"dashboard/prakriti-dashboard-github-my-repositories",
    component:PrakDashGithubMyRepoComponent
  },
  {
    path:"dashboard/prakriti-dashboard-github-starred-repositories",
    component:PrakDashGithubStarRepoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
