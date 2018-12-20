import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DigitComponent } from './lcd/digit/digit/digit.component';
import { ResetComponent } from './button/reset/reset/reset.component';
import { SwitchComponent } from './button/switch/switch/switch.component';

@NgModule({
  declarations: [
    AppComponent,
    DigitComponent,
    ResetComponent,
    SwitchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
