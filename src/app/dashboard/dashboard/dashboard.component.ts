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
  defaultCity:string = 'Colombo';
  constructor(
    private httpService:HttpService
  ) { }

  ngOnInit(): void {
    this.$currentWeatherData = this.httpService.getCurrentWeather(this.defaultCity);
  }

  oncityChange(city:string){
    this.$currentWeatherData = this.httpService.getCurrentWeather(city);
  }

}
