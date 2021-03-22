

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/toybz/weather-app">
    <img src="src/assets/screenshots/landing-page.png" alt="Logo" >
  </a>

<h3 align="center">Angular Weather App</h3>

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
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
The goal of this weather app is to  display weather conditions and forecasts for selected cities.  

### Built With

* [Angular](https://angular.io/)
* [Bootstrap](https://getbootstrap.com)
* [OpenWeather API](https://openweathermap.org)


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

## Usage

When served, the landing page will display the current weather for 5 cities. To get the forecasts for a city, click on the
'Show Forecast' button. 

## Contact

Email - [toyeeb.rahmon@outlook.com](toyeeb.rahmon@outlook.com) 

Project Link: [https://github.com/toybz/weather-app](https://github.com/toybz/weather-app)


