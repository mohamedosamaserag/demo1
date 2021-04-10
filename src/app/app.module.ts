import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { HomeCompComponent } from './home-comp/home-comp.component';
import { MyCounterService } from './_sevices/my-counter.service';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    HomeCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
