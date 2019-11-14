import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { PrakDashboardParentComponent } from './prak-dashboard-parent/prak-dashboard-parent.component';
import { MatRippleModule, MatNativeDateModule } from '@angular/material/core';
import { CustomSearchOneComponent } from './custom-search-one/custom-search-one.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { SidebarAvatarComponent } from './sidebar-avatar/sidebar-avatar.component';
import { HeaderWithLogoComponent } from './header-with-logo/header-with-logo.component';
import { HeaderWithAccountComponent } from './header-with-account/header-with-account.component';
import { SidebarLinksComponent } from './sidebar-links/sidebar-links.component';
import { AvatarModule } from 'ngx-avatar';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ PrakDashboardParentComponent, CustomSearchOneComponent, SidebarAvatarComponent, HeaderWithLogoComponent, HeaderWithAccountComponent, SidebarLinksComponent],
  imports: [
    CommonModule,
    RouterModule,

    HttpClientModule,
    AvatarModule,

    MatToolbarModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule
  ],
  exports:[
    PrakDashboardParentComponent, CustomSearchOneComponent,
    SidebarAvatarComponent, HeaderWithLogoComponent, SidebarLinksComponent, 
    HeaderWithAccountComponent
  ]
})
export class ComponentsModule { }
