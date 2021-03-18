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
      image: 'assets/images/cities/amsterdam.jpg'
    } ,
    {
      name: 'Paris',
      image: 'assets/images/cities/paris.jpg'

    } ,
    {
      name: 'London',
      image: 'assets/images/cities/london.webp'

    } ,
    {
      name: 'Berlin',
      image: 'assets/images/cities/berlin.jpg'

    } ,
    {
      name: 'Rome',
      image: 'assets/images/cities/rome.jpg'

    } ,
  ] ;
}
