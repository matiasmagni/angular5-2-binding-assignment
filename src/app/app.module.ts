import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ReactiveInputComponent } from './components/reactive-input/reactive-input.component';
import { ReactivePComponent } from './components/reactive-p/reactive-p.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveInputComponent,
    ReactivePComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
