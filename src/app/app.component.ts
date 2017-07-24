import { Component,ViewChild } from '@angular/core';
import {AdvertisementTable } from './components/AdvertisementTableComponent/advertisement.table';
import {AdvertisementsServices} from './service/advertisement.service';
@Component({
   selector: 'my-app',
  template: `<myForm (advEvent)="storeAdvertise($event)"></myForm><myTable></myTable>`,
  providers:[AdvertisementsServices]
})
export class AppComponent  {
  constructor(private advertiseService:AdvertisementsServices){}
  //currentAdvertise:any; 
  //currentAdvertise:Array<{productname:string,category:string,description:string}>=[];
 // @ViewChild(AdvertisementsServices) tableChild: AdvertisementsServices;
    storeAdvertise(newAdvertise:any){
    //this.currentAdvertise.push(newAdvertise);
    this.advertiseService.putAdvertise(newAdvertise);
    //this.currentAdvertise=newAdvertise;
  }
}
