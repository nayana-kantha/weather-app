import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { PlacesSearchComponent } from './components/places-search/places-search.component';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HeaderComponent,
    PlacesSearchComponent,
    CurrentWeatherComponent
  ],
  imports: [
    CommonModule,
    GooglePlaceModule
  ],
  exports: [
    HeaderComponent,
    PlacesSearchComponent,
    CurrentWeatherComponent
  ]
})
export class SharedModule { }
