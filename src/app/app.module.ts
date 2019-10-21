// import 'reflect-metadata';
// import '../polyfills';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';
import { DashboardModule } from './dashboard/dashboard.module';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import { ComponentsModule } from './components/components.module';
import { RouterBottomSheetComponent } from './components/router-bottom-sheet/router-bottom-sheet.component';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    HomeModule,
    DashboardModule,
    ComponentsModule,

    MatBottomSheetModule,
    MatButtonModule,
    MatNativeDateModule 
  ],
  bootstrap: [AppComponent],
  entryComponents:[RouterBottomSheetComponent]
})
export class AppModule { }
