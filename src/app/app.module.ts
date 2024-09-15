import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/components/home/home.component';
import { NavBarComponent } from './components/components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HomeComponent, NavBarComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
