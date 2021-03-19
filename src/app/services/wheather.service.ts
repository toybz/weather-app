import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WheatherService {

  baseUrl = 'https://api.openweathermap.org/data/2.5/';
  weatherAppId = environment.weatherAppId;
  units = 'metric';

  constructor(private http: HttpClient) { }

  getCurrentWeather(cityName: string): any{
    return this.http.get(`${this.baseUrl}/weather?q=${cityName}&appid=${this.weatherAppId}&units=${this.units}`);

  }

  getWeatherForecast(cityName: string): any{
    return this.http.get(`${this.baseUrl}/forecast?q=${cityName}&appid=${this.weatherAppId}&units=${this.units}`);

  }
}
