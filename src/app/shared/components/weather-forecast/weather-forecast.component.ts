import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss']
})
export class WeatherForecastComponent implements OnInit {

  @Input() data:any;
  @Input() city:any;
  @Input() index:number = 0;
  @Input() selectedIndex:number = 0;
  date:string = '';
  time:string = '';
  constructor() { }

  ngOnInit(): void {
    if(this.data){
      this.spliteDateTime();
    }
  }

  spliteDateTime(){
    let tempSplit = this.data.dt_txt.split(' ');
    let timeSplit = tempSplit[1].split(':');
    this.date = tempSplit[0];
    this.time = timeSplit[0] + ':' + timeSplit[1];
  }

}
