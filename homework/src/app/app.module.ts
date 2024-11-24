import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpExamplesComponent } from './http-examples/http-examples.component';
import { HttpClientModule } from '@angular/common/http';
import { Task3Component } from './task3/task3.component';

@NgModule({
  declarations: [AppComponent, HttpExamplesComponent, Task3Component],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
