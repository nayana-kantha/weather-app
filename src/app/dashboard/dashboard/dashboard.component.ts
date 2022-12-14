import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from 'src/app/shared/models/address.model';
import { AirQuality } from 'src/app/shared/models/air-quality.model';
import { CurrentWeather } from 'src/app/shared/models/current-weather.model';;
import { WeatherData } from 'src/app/shared/models/weather-data.model';
import { HttpService } from 'src/app/shared/services/http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public $currentWeatherData:Observable<CurrentWeather> = new Observable();
  public $airQuality:Observable<AirQuality> = new Observable();
  public $weatherForecastData:Observable<WeatherData> = new Observable();
  location:Location = {
    lat:6.9270786,
    lng:79.861243
  }
  selectedIndex:number = 0;
  constructor(
    private httpService:HttpService
  ) { }

  ngOnInit(): void {
    this.getCurrentLocation();
  }

  getLocation(location:Location){
    this.getAllData(location);
  }

  openDetailsBox(index:number){
    this.selectedIndex = index;
  }

  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: any) => {
        if (position) {
          this.location.lat = position.coords.latitude;
          this.location.lng = position.coords.longitude;
          this.getAllData(this.location);
        }
      },
        (error: any) => {
          this.getAllData(this.location);
        });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  getAllData(location:Location){
    this.$currentWeatherData = this.httpService.getCurrentWeather(location);
    this.$airQuality = this.httpService.getAirQualityData(location);
    this.$weatherForecastData = this.httpService.getWeatherForcastData(location);
  }

}
