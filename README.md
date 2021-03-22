

<h1 align="center">Angular Weather App</h1>
<br />
<p align="center">
  <a href="https://github.com/toybz/weather-app">
    <img src="src/assets/screenshots/landing-page.png" alt="Logo" >
  </a>

  <p align="center">
    An Angular Weather App that displays weather conditions and forecasts for selected cities. This project uses the Openweather endpoints.
   </p>

<p align="center">
<a href="https://euro-weather-app.netlify.app/" >View Demo</a>
</p>


<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
The goal of this weather app is to  display weather conditions and forecasts for selected cities.  
<br/>
When served, the landing page will display the current weather for 5 cities. Click on the
'Show Forecast' button to get the city's weather forecasts.  

The App has 2 components and 1 service as listed below.  
**AppComponent** - contains a list of the cities weather data.  It uses a Bootstrap accordion to show and hide the wheather forecasts for the selected city.  
**AppWeatherCard**- Gets and displays the weather condition and forecast of a city.  
It contains a Bootstrap accordion item that displays the current weather in the accordion header.On clicking  the 'Show Forecast' button the accordion body which contains the city's  weather forecast will be displayed.  
**WheatherService**- The WheatherService provides 2 methods to fetch the current wheather data and the forecast data for a city.

The app uses the city's id to get the city's weather data instead of using the city name, following the [OpenWeather recommendation](https://openweathermap.org/current#cityid) to call API by city ID to get unambiguous result for the city.

The app uses Angular service worker to cache the weather requests for 10 minutes as recommended [here](https://openweathermap.org/appid#apicare).
The service worker settings is located at ngsw-config.json


### Built With

* [Angular](https://angular.io/) : Frontend framework
* [Bootstrap](https://getbootstrap.com) : Style
* [OpenWeather API](https://openweathermap.org) : Weather data source
* [NGX Skeleton loader](https://www.npmjs.com/package/ngx-skeleton-loader) : Loading component
* [Angular Service-worker](https://www.npmjs.com/package/@angular/service-worker) : Cache Requests


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow the steps below

### Prerequisites

* Get an App ID from [OpenWeather](https://openweathermap.org)
* Ensure the [Angular](https://angular.io) CLI is installed 

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/toybz/weather-app.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Enter your OpenWeather App ID  in the `environment.ts` and `environment.prod.ts` file
   ```JS
    weatherAppId : 'xxxxxxxxxxxxxxxx'
   ```
2. Serve 
   ```sh
   npm run start --open
   ```

## Contact

Email - [toyeeb.rahmon@outlook.com](toyeeb.rahmon@outlook.com) 

Project Link: [https://github.com/toybz/weather-app](https://github.com/toybz/weather-app)


