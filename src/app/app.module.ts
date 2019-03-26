import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {NgsRevealModule} from 'ngx-scrollreveal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentBoxComponent } from './content-box/content-box.component';
import { ScrollDirective } from './content-box/scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    ContentBoxComponent,
    ScrollDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgsRevealModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
