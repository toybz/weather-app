import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCardComponent } from './weather-card.component';
import {WheatherService} from '../../services/wheather.service';
import {HttpClientModule} from '@angular/common/http';
import {City} from '../../models/city-weather';
import {NgxSkeletonLoaderModule} from 'ngx-skeleton-loader';

describe('WeatherCardComponent', () => {
  let component: WeatherCardComponent;
  let fixture: ComponentFixture<WeatherCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, NgxSkeletonLoaderModule],
      declarations: [WeatherCardComponent],
      providers: [WheatherService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render @input city.name', () => {
    fixture = TestBed.createComponent(WeatherCardComponent);
    const app = fixture.componentInstance;
    const inputCity: City = {
      name: 'Lagos',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Lekki-Epe_Expressway_Sandfill_Bustop.jpg/268px-Lekki-Epe_Expressway_Sandfill_Bustop.jpg',
      id: '111'
    };
    app.city = inputCity;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.city_name').textContent).toBe(inputCity.name);
  });

  it('should render @input city.image', () => {
    fixture = TestBed.createComponent(WeatherCardComponent);
    const app = fixture.componentInstance;
    const inputCity: City = {
      name: 'Lagos',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Lekki-Epe_Expressway_Sandfill_Bustop.jpg/268px-Lekki-Epe_Expressway_Sandfill_Bustop.jpg',
      id: '111'
    };
    app.city = inputCity;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.city-image-container img').src).toContain(inputCity.image);
  });

  it('should call getCurrentWeather() on ngInit() ', () => {
    spyOn(component, 'getCurrentWeather');
    component.ngOnInit();
    expect(component.getCurrentWeather).toHaveBeenCalled();
  });
});
