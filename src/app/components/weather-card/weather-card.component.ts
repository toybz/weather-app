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
 @Input() accordionId = 0 ;
  weatherData: CityWeather = {
    temperature: '',
    dateTime: '',
    wind: '',
    forecast: []
  } ;


  isFetchingWeather = false;
  isFetchingForecast = false;


  constructor(private weatherService: WheatherService) { }
  ngOnInit(): void {

    this.getCurrentWeather();
  }


  getCurrentWeather(): void{
    this.isFetchingWeather = true;
    this.weatherService.getCurrentWeather(this.city.id).subscribe((response: any) => {
        console.log('weather response', response);
        this.weatherData = {...this.weatherData,
          temperature: response.main.temp,
          wind: response.wind.speed,
          dateTime: new Date(response.dt)
        };
     //   this.isFetchingWeather = false;

        setTimeout(() => {
          this.isFetchingWeather = false;
        }, 3000 );

    }

    );
  }

  fetchWeatherForecast(): void{
    if (this.weatherData.forecast.length >= 1){
      return;
    }
    this.isFetchingForecast = true;
    this.weatherService.getWeatherForecast(this.city.id).subscribe((response: any) => {
        console.log('weather forecast', response);

        this.weatherData.forecast = this.cleanForecastData(response.list);
       // this.isFetchingForecast = false;

      setTimeout(() => {
        this.isFetchingForecast = false;
      }, 3000 );

      }

    );

  }

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

  timeStampToDate(timestamp: string): string{
    return new Date(timestamp).toDateString();
  }

}
