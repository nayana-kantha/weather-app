import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() city: EventEmitter<string> = new EventEmitter();
  @Output() location: EventEmitter<string> = new EventEmitter();

  currentCity:string = 'Colombo';
  currentCountry:string = 'Sri Lanka';
  constructor() { }

  ngOnInit(): void {
  }

  selectedCity(city:string){
    this.currentCity = city;
    this.city.emit(city);
  }

  selectedCountry(country:string){
    this.currentCountry = country;
  }

  getLocation(location:any){
    this.location.emit(location);
  }

}
