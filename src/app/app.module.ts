import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaiwanDatePipe } from './shared/pipe/taiwan-date/taiwan-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TaiwanDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
