import {Component, Input, OnInit} from '@angular/core';
import {CityWeather} from '../../models/city-weather';
import {WheatherService} from '../../services/wheather.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {

  @Input() city =  {
    name: '',
    image: ''
  };
  weatherData: CityWeather = {
    temperature: '',
    wind: '',
    forecast: []
  } ;
  // To Auto Geneate an Id for the accordion
  weatherCardId = new Date().getTime();

  isFetchingWeather = false;
  isFetchingForecast = false;

  constructor(private weatherService: WheatherService) { }
  ngOnInit(): void {
    this.getCurrentWeather();
  }


  getCurrentWeather(): void{
    this.isFetchingWeather = true;
    this.weatherService.getCurrentWeather(this.city.name).subscribe((response: any) => {
        console.log('weather response', response);
        this.weatherData = {...this.weatherData,
          temperature: response.main.temp,
          wind: response.wind.speed
        };
     //   this.isFetchingWeather = false;

        setTimeout(() => {
          this.isFetchingWeather = false;
        }, 5000 );

    }

    );
  }

  fetchWeatherForecast(): void{
    this.isFetchingForecast = true;
    this.weatherService.getWeatherForecast(this.city.name).subscribe((response: any) => {
        console.log('weather forecast', response);

        this.weatherData.forecast = this.cleanForecastData(response.list);
       // this.isFetchingForecast = false;

      setTimeout(() => {
        this.isFetchingForecast = false;
      }, 5000 );

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


}
