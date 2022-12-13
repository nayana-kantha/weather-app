import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrentWeather } from 'src/app/shared/models/current-weather.model';
import { WeatherData } from 'src/app/shared/models/weather-data.model';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public $currentWeatherData:Observable<CurrentWeather> = new Observable();
  public $airQuality:Observable<any> = new Observable();
  public $weatherForecastData:Observable<WeatherData> = new Observable();
  defaultCity:string = 'Colombo';
  location:any = {
    lat:6.9270786,
    lng:79.861243
  }
  selectedIndex:number = 0;
  constructor(
    private httpService:HttpService
  ) { }

  ngOnInit(): void {
    this.$currentWeatherData = this.httpService.getCurrentWeather(this.defaultCity);
    this.$airQuality = this.httpService.getAirQualityData(this.location);
    this.$weatherForecastData = this.httpService.getWeatherForcastData(this.defaultCity);
  }

  oncityChange(city:string){
    this.$currentWeatherData = this.httpService.getCurrentWeather(city);
    this.$weatherForecastData = this.httpService.getWeatherForcastData(city);
  }

  getLocation(location:any){
    this.$airQuality = this.httpService.getAirQualityData(location)
  }

  openDetailsBox(index:number){
    this.selectedIndex = index;
  }

}
