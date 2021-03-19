import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgxSkeletonLoaderModule} from 'ngx-skeleton-loader';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    WeatherCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxSkeletonLoaderModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
