import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-places-search',
  templateUrl: './places-search.component.html',
  styleUrls: ['./places-search.component.scss']
})
export class PlacesSearchComponent implements OnInit {

  @Output() selectedCity: EventEmitter<string> = new EventEmitter();
  @Output() selectedCountry: EventEmitter<string> = new EventEmitter();
  @Output() location:EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  handleAddressChange(address: any) {
    this.selectedCity.emit(address.name);
    this.selectedCountry.emit(address.address_components[3]?.long_name);
    this.location.emit({
      lat:address.geometry.location.lat(),
      lng:address.geometry.location.lng()
    })
  }

}
