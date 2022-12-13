import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { PlacesSearchComponent } from './components/places-search/places-search.component';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { HttpClientModule } from '@angular/common/http';
import { AirQualityComponent } from './components/air-quality/air-quality.component';
import { ChartModule } from 'primeng/chart';
import { WeatherForecastComponent } from './components/weather-forecast/weather-forecast.component';

@NgModule({
  declarations: [
    HeaderComponent,
    PlacesSearchComponent,
    CurrentWeatherComponent,
    AirQualityComponent,
    WeatherForecastComponent
  ],
  imports: [
    CommonModule,
    GooglePlaceModule,
    ChartModule
  ],
  exports: [
    HeaderComponent,
    PlacesSearchComponent,
    CurrentWeatherComponent,
    AirQualityComponent,
    WeatherForecastComponent
  ]
})
export class SharedModule { }
