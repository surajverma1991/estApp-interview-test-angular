import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecondFormComponent } from './second-form/second-form.component';
import { FirstFormComponent } from './first-form/first-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondFormComponent,
    FirstFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
