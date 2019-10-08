import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrakHomeZeroConnAccComponent } from './prak-home-zero-conn-acc/prak-home-zero-conn-acc.component';
import { PrakHomeWithConnAccComponent } from './prak-home-with-conn-acc/prak-home-with-conn-acc.component';


const routes: Routes = [
  {
    path:"dashboard/prakriti-home-zero-connected-accounts",
    component:PrakHomeZeroConnAccComponent
  },
  {
    path:"dashboard/prakriti-home-with-connected-accounts",
    component:PrakHomeWithConnAccComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
