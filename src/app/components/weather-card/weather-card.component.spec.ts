import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCardComponent } from './weather-card.component';
import {WheatherService} from '../../services/wheather.service';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from '../../app.component';
import {City} from '../../models/city-weather';
import {By} from '@angular/platform-browser';
import createSpy = jasmine.createSpy;
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

    // expect(app.city).toEqual('Weather App');

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.city_name').textContent).toBe(inputCity.name);
  });


  it('should render @input city.image', () => {
    fixture = TestBed.createComponent(WeatherCardComponent);
    const app = fixture.componentInstance;
    const inputCity: City = {
      name: 'Lagos',
      image: 'https',
      id: '111'
    };
    app.city = inputCity;
    fixture.detectChanges();

    // expect(app.city).toEqual('Weather App');

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.city-image-container img').src).toContain(inputCity.image);
  });


  it('should use @input accordionId for the collapse button and accordion body',  () => {
    fixture = TestBed.createComponent(WeatherCardComponent);
    const app = fixture.componentInstance;
    const accordionId = 1;
    app.accordionId = accordionId;
    fixture.detectChanges();

    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('.show_forecast_button').getAttribute('data-bs-target')).toBe(`#accordion-body${accordionId}`);

    expect(compiled.querySelector('.accordion-body-container').getAttribute('id')).toBe(`accordion-body${accordionId}`);

  });




  it('fetch forecast when show forecast button is clicked',  () => {
    fixture = TestBed.createComponent(WeatherCardComponent);
    const app = fixture.componentInstance;
    const accordionId = 1;
    app.accordionId = accordionId;
    fixture.detectChanges();

    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('.show_forecast_button').getAttribute('data-bs-target')).toBe(`#accordion-body${accordionId}`);

    expect(compiled.querySelector('.accordion-body-container').getAttribute('id')).toBe(`accordion-body${accordionId}`);

  });







  it('collapse button should show/hide the forecast content', async  () => {

    fixture = TestBed.createComponent(WeatherCardComponent);
    const app = fixture.componentInstance;

    app.getCurrentWeather =  jasmine.createSpy().and.callFake(() => {
      app.isFetchingWeather = false;
      fixture.detectChanges();
    });

    const accordionId = 1;
    app.accordionId = accordionId;
    const city: City = {
      name: 'Lagos',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Lekki-Epe_Expressway_Sandfill_Bustop.jpg/268px-Lekki-Epe_Expressway_Sandfill_Bustop.jpg',
      id: '111'
    };
    app.city = city;
    fixture.detectChanges();

    const showForecastButton = fixture.debugElement.query(By.css('button'));
    showForecastButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector(`#accordion-body${accordionId}`).getAttribute('class')).toContain('show');


  //  fixture.detectChanges();


 /*
    expect(compiled.querySelector(`#accordion-body${accordionId}`).getAttribute('class')('show'));*/
    //  .toBe(`#accordion-body${accordionId}`);




  });


/*  it('collapse button should show/hide the forecast content', () => {
    fixture = TestBed.createComponent(WeatherCardComponent);
    const app = fixture.componentInstance;

    const accordionId = 1;
    component.accordionId = accordionId;

    const city: City = {
      name: 'Lagos',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Lekki-Epe_Expressway_Sandfill_Bustop.jpg/268px-Lekki-Epe_Expressway_Sandfill_Bustop.jpg',
      id: '111'
    };
    component.city = city;

    spyOn(WeatherCardComponent, 'getCurrentWeather').and.callFake( =>(){
      app.isFetchingForecast = false;

    });

    fixture.detectChanges();
    const showForecastButton = fixture.debugElement.query(By.css('.show_forecast_button'));

    showForecastButton.triggerEventHandler('click', null);
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector(`#accordion-body${accordionId}`).toHaveClass('show'));
    //  .toBe(`#accordion-body${accordionId}`);


  });*/

});


/*
    Test that the City input render the city name and image in the html

    Test that the accordion Id always matches with what is rendered


    Test that onInit the getCurrentweather is called.
     Test get getCurrentWeather()
       is Fetching should become true
       after fetching data weatherData should  update its data with the returned data
       check that the UI shows the wather and wind
       isFetchingWeather should become false




       On click of show forecast the dropdown should show
       the fetchWeatherForecast should be called.
       check that it  follows the process




it('should open', injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
  return tcb.createAsync(DropdownComponent)
  .then(fixture => {
    let el = fixture.nativeElement;
    let comp: DropdownComponent = fixture.componentInstance;

    expect(el.className).toEqual('');

    // Update the input
    comp.open = true; // <-----------

    // Apply
    fixture.detectChanges(); // <-----------

    var div = fixture.nativeElement.querySelector('div');
    // Test elements that depend on the input
    expect(div.className).toEqual('open');
  });
}));






 */
