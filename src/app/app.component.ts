import { Component,ViewChild } from '@angular/core';
import {AdvertisementTable } from './components/AdvertisementTableComponent/advertisement.table';
import {AdvertisementsServices} from './service/advertisement.service';

@Component({
   selector: 'my-app',
  template: `<router-outlet></router-outlet>`,
  

})
export class AppComponent  {
  
}
