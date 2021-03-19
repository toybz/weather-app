import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather-app';
  cities = [
    {
      name: 'Amsterdam',
      image: 'assets/images/cities/amsterdam.webp',
      id: '2759794'
    } ,
    {
      name: 'Paris',
      image: 'assets/images/cities/paris.webp',
      id: '6455259'

    } ,
    {
      name: 'London',
      image: 'assets/images/cities/london.webp' ,
      id: '2643743'

    } ,
    {
      name: 'Berlin',
      image: 'assets/images/cities/berlin.webp',
      id: '2950158'

    } ,
    {
      name: 'Rome',
      image: 'assets/images/cities/rome.webp',
      id: '3169070'

    } ,
  ] ;
}
