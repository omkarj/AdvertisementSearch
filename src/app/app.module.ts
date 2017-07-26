import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { AdvertisementForm } from './components/AdvertisementFormComponent/advertisement.form';
import { AdvertisementTable } from './components/AdvertisementTableComponent/advertisement.table';
import { FilterAdd } from './components/AdvertisementTableComponent/advertisement.table';
import {  RouterModule} from "@angular/router";
import { EditProduct } from "./components/EditProduct/editProduct.component";
import { HomeComponent } from "./components/HomeComponent/home.component";

@NgModule({
  imports:      [ BrowserModule, 
                RouterModule.forRoot([
                  {path: '', component: HomeComponent},
                  {path: 'Page_2', component: EditProduct}
                ]) ],
  declarations: [ AppComponent,AdvertisementForm,AdvertisementTable,FilterAdd,EditProduct,HomeComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
