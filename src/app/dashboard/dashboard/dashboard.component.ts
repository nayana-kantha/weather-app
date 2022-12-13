import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrentWeather } from 'src/app/shared/models/current-weather.model';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public $currentWeatherData:Observable<CurrentWeather> = new Observable();
  public $airQuality:Observable<any> = new Observable();
  defaultCity:string = 'Colombo';
  location:any = {
    lat:6.9270786,
    lng:79.861243
  }
  constructor(
    private httpService:HttpService
  ) { }

  ngOnInit(): void {
    this.$currentWeatherData = this.httpService.getCurrentWeather(this.defaultCity);
    this.$airQuality = this.httpService.getAirQualityData(this.location);
  }

  oncityChange(city:string){
    this.$currentWeatherData = this.httpService.getCurrentWeather(city);
  }

  getLocation(location:any){
    this.$airQuality = this.httpService.getAirQualityData(location)
  }

}
