import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CurrentWeather } from '../models/current-weather.model';
import { WeatherData } from '../models/weather-data.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getCurrentWeather(city: string): Observable<CurrentWeather> {
    return this.httpClient.get<CurrentWeather>(`${environment.currentWeatherUrl}?id=${environment.id}&appid=${environment.appid}&units=metric&q=${city}`);
  }

  getAirQualityData(location:any): Observable<any> {
    return this.httpClient.get<any>(`${environment.airPollutionUrl}?appid=${environment.appid}&lat=${location.lat}&lon=${location.lng}`);
  }

  getWeatherForcastData(city: string): Observable<WeatherData> {
    return this.httpClient.get<WeatherData>(`${environment.weatherForcastUrl}?id=${environment.id}&appid=${environment.appid}&cnt=22&units=metric&q=${city}`);
  }

}
