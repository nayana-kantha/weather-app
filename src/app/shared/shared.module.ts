import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { PlacesSearchComponent } from './components/places-search/places-search.component';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';


@NgModule({
  declarations: [
    HeaderComponent,
    PlacesSearchComponent
  ],
  imports: [
    CommonModule,
    GooglePlaceModule
  ],
  exports: [
    HeaderComponent,
    PlacesSearchComponent
  ]
})
export class SharedModule { }
