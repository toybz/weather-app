import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WheatherService {

  // openWeatherApi base url
  baseUrl = environment.baseUrl;
  // openWheather App ID
  weatherAppId = environment.weatherAppId;
  // The weather unit
  units = 'metric';

  constructor(private http: HttpClient) { }

  // Method to fetch the current weather for a city from OpenWeather API
  getCurrentWeather(cityId: string): Observable<any>{
    return this.http.get(`${this.baseUrl}/weather?id=${cityId}&appid=${this.weatherAppId}&units=${this.units}`);

  }

  // Method to fetch the weather forecasts for a city  from OpenWeather API
  getWeatherForecast(cityId: string): Observable<any>{
    return this.http.get(`${this.baseUrl}/forecast?id=${cityId}&appid=${this.weatherAppId}&units=${this.units}`);

  }
}
