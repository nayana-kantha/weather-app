import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentCity:string = 'Colombo';
  currentCountry:string = 'Sri Lanka';
  constructor() { }

  ngOnInit(): void {
  }

}
