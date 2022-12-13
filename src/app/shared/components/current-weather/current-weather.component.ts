import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {

  @Input() data:any;
  constructor() { }

  ngOnInit(): void {
  }

}
