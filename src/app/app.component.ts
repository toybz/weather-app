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
      image: 'assets/images/cities/amsterdam.webp'
    } ,
    {
      name: 'Paris',
      image: 'assets/images/cities/paris.webp'

    } ,
    {
      name: 'London',
      image: 'assets/images/cities/london.webp'

    } ,
    {
      name: 'Berlin',
      image: 'assets/images/cities/berlin.webp'

    } ,
    {
      name: 'Rome',
      image: 'assets/images/cities/rome.webp'

    } ,
  ] ;
}
