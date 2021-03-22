import { TestBed } from '@angular/core/testing';

import { WheatherService } from './wheather.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('WheatherService', () => {
  let service: WheatherService;
  let httpTestingController: HttpTestingController;
  const baseUrl = 'https://api.openweathermap.org/data/2.5';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WheatherService]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(WheatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('GetCurrentWeather() should fetch from OpenWeather ', () => {
    let result: {};
    const cityId = '100';
    service.getCurrentWeather(cityId).subscribe(t => {
      result = t;
    });
    const req = httpTestingController.expectOne({
      method: 'GET',
      url: baseUrl + `/weather?id=${cityId}&appid=0e85f1d27a48efe2ec136473ea6e4f03&units=metric`
    });

    req.flush({
      main: {
        temp: 7.55,
        feels_like: 2.4,
        temp_min: 7,
        temp_max: 8.33,
        pressure: 1026,
        humidity: 61
      },
      wind: {
        speed: 4.63,
        deg: 10
      },
    id: '100'});

    // @ts-ignore
    expect(result.id).toBe(cityId);
  });

  it('getWeatherForecast() should fetch from OpenWeather ', () => {
    let result: {};
    const cityId = '100';
    service.getWeatherForecast(cityId).subscribe(t => {
      result = t;
    });
    const req = httpTestingController.expectOne({
      method: 'GET',
      url: baseUrl + `/forecast?id=${cityId}&appid=0e85f1d27a48efe2ec136473ea6e4f03&units=metric`
    });

    req.flush({
     city : {
       id: '100'
     }
   });

    // @ts-ignore
    expect(result.city.id).toBe(cityId);
  });

});
