import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from "@angular/http"
import { AppComponent } from './app.component';
import { DefaultBodyComponent } from './default-body/default-body.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultBodyComponent
  ],
  imports: [
    BrowserModule,HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
