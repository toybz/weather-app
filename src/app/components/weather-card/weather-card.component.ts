import {Component, Input, OnInit} from '@angular/core';
import {City, CityWeather} from '../../models/city-weather';
import {WheatherService} from '../../services/wheather.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {

  @Input() city: City =  {
    name: '',
    image: '',
    id: ''
  };
  // This (accordionItemId) is used to create and control the accordion item in the template
 @Input() accordionItemId = 0 ;
  weatherData: CityWeather = {
    temperature: '',
    wind: '',
    dateTime: '',
    forecast: []
  } ;
  isFetchingWeather = false;
  isFetchingForecast = false;

  constructor(private weatherService: WheatherService) { }
  ngOnInit(): void {
    this.getCurrentWeather();
  }

  // This method gets and updates the current weather  for the city
  getCurrentWeather(): void{
    // set to true to show the skeleton loading component and hide weather details
    this.isFetchingWeather = true;
    this.weatherService.getCurrentWeather(this.city.id).subscribe((response: any) => {
      // update the weather data with the  current weather response
        this.weatherData = {...this.weatherData,
          temperature: response.main.temp,
          wind: response.wind.speed,
          dateTime: new Date(response.dt * 1000)
        };
        // set to false to hide the skeleton loading component and show the current weather details
        this.isFetchingWeather = false;
    }
    );
  }

  // This method gets the city weather forecasts and update's the  weather data
  fetchWeatherForecast(): void{
    // set to true to show the skeleton loading component and hide the forecast table
    this.isFetchingForecast = true;
    this.weatherService.getWeatherForecast(this.city.id).subscribe((response: any) => {
      // clean the Forecast response to match the forecast  data and update the weather data
      this.weatherData.forecast = this.cleanForecastData(response.list);
      // set to false to hide the skeleton loading component and show the forecast table
      this.isFetchingForecast = false;
      }
    );
  }

  // This method takes Forecast response and returns a structured array with the required data
  cleanForecastData(forecastData: []): Array<any>{
     return forecastData.map(
       (forecast: any) => {
         return {
           temperature: forecast.main.temp,
           wind: forecast.wind.speed,
           dateTime: forecast.dt_txt
         };
       }
     );

  }

}
