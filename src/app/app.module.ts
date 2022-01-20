import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CounterComponent} from "./counter/counter.component";
import {IncrementCounterComponent} from "./counter/increment-counter.component";

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    IncrementCounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
