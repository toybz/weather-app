export interface City {
  name: string;
  image: string;
  id: string;
}

export interface CityWeather {
  temperature: string;
  wind: string;
  dateTime: any;
  forecast: Array<{
    temperature: string;
    wind: string;
    dateTime: string
  }> | [] ;
}

