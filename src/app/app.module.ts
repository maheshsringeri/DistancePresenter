import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { IconDirective } from './directives/icon.directive';
import { DistanceConverterPipe } from './pipes/distance-converter.pipe';
import { TimeConverterPipe } from './pipes/time-converter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    IconDirective,
    DistanceConverterPipe,
    TimeConverterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
