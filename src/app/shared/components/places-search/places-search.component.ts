import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Address, Location } from '../../models/address.model';

@Component({
  selector: 'app-places-search',
  templateUrl: './places-search.component.html',
  styleUrls: ['./places-search.component.scss']
})
export class PlacesSearchComponent implements OnInit {

  @Output() selectedCity: EventEmitter<string> = new EventEmitter();
  @Output() selectedCountry: EventEmitter<string> = new EventEmitter();
  @Output() location:EventEmitter<Location> = new EventEmitter<Location>();

  constructor() { }

  ngOnInit(): void {
  }

  handleAddressChange(address: Address) {
    if(address?.name != ''){
      this.selectedCity.emit(address.name);
      this.selectedCountry.emit(address.address_components[3]?.long_name);
      this.location.emit({
        lat:address.geometry.location.lat(),
        lng:address.geometry.location.lng()
      })
    }
    
  }

}
