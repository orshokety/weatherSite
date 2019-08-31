import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  token: string = "qeGUJ0lKYyxFvGzLpS1mkYKdEr0TxbRl";
  private pathAutoComplete: string = 'http://dataservice.accuweather.com/locations/v1/cities/autocomplete';
  private pathCurrentConditions: string = 'http://dataservice.accuweather.com/currentconditions/v1/';
  private pathForFiveDays: string = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/'
  constructor(private http: HttpClient) {
  }

  getByName(location: string): any {
    return this.http.get(`${this.pathAutoComplete}?apikey=${this.token}&q=${location}`);
  }

  getTemperatureAndWeather(locationkey: string): any {
    return this.http.get(`${this.pathCurrentConditions}${locationkey}?apikey=${this.token}`);
  }

  getFiveDaysWeather(locationkey: string): any {
    return this.http.get(`${this.pathForFiveDays}${locationkey}?apikey=${this.token}`);
  }
}
