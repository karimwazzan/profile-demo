import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { ProfileListComponent } from '@components/profile-list/profile-list.component';
import { ProfileDetailsComponent } from '@components/profile-details/profile-details.component';
import { HomeComponent } from '@components/home/home.component';
import { MaterialModule } from '@modules/material.module';
import { ImgErrorDirective } from './directives/img-error.directive';
import { ProfileDetailsTabComponent } from './components/profile-details-tab/profile-details-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileDetailsComponent,
    ProfileListComponent,
    HomeComponent,
    ImgErrorDirective,
    ProfileDetailsTabComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
