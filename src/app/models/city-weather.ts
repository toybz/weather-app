export interface CityWeather {
  temperature: string;
  wind: string;
  forecast: Array<{
    temperature: string;
    wind: string;
    dateTime: string
  }> | [] ;
}
