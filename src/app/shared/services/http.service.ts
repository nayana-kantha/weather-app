import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Location } from '../models/address.model';
import { AirQuality } from '../models/air-quality.model';
import { CurrentWeather } from '../models/current-weather.model';
import { WeatherData } from '../models/weather-data.model';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getCurrentWeather(location: Location): Observable<CurrentWeather> {
    return this.httpClient.get<CurrentWeather>
      (`${environment.currentWeatherUrl}?id=${environment.id}&appid=${environment.appid}&units=metric&lat=${location.lat}&lon=${location.lng}`)
      .pipe(shareReplay(1));;
  }

  getAirQualityData(location: Location): Observable<AirQuality> {
    return this.httpClient.get<AirQuality>
      (`${environment.airPollutionUrl}?appid=${environment.appid}&lat=${location.lat}&lon=${location.lng}`)
      .pipe(shareReplay(1));
  }

  getWeatherForcastData(location: Location): Observable<WeatherData> {
    return this.httpClient.get<WeatherData>
      (`${environment.weatherForcastUrl}?id=${environment.id}&appid=${environment.appid}&cnt=22&units=metric&lat=${location.lat}&lon=${location.lng}`)
      .pipe(shareReplay(1));
  }

}
