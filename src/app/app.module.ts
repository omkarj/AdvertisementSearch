import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { AdvertisementForm } from './components/AdvertisementFormComponent/advertisement.form';
import { AdvertisementTable } from './components/AdvertisementTableComponent/advertisement.table';
import { FilterAdd } from './components/AdvertisementTableComponent/advertisement.table';
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,AdvertisementForm,AdvertisementTable,FilterAdd],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
