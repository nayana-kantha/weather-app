import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { PlacesSearchComponent } from './components/places-search/places-search.component';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { AirQualityComponent } from './components/air-quality/air-quality.component';
import { ChartModule } from 'primeng/chart';
import { WeatherForecastComponent } from './components/weather-forecast/weather-forecast.component';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import { AgmCoreModule } from '@agm/core';

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
    ChartModule,
    MatGoogleMapsAutocompleteModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBDW0PygQGJb_JkzHLD4W-Ry04fxaFCIF8',
      libraries: ['places']
    }),
  ],
  exports: [
    HeaderComponent,
    PlacesSearchComponent,
    CurrentWeatherComponent,
    AirQualityComponent,
    WeatherForecastComponent
  ],
  providers: []
})
export class SharedModule { }
