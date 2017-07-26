import { Component, EventEmitter, Input, Output } from '@angular/core';
import {AdvertisementTable } from '../../components/AdvertisementTableComponent/advertisement.table';
import {AdvertisementsServices} from '../../service/advertisement.service';
@Component({
  selector: 'homeComponent',
  template: '<myForm (advEvent)="storeAdvertise($event)"></myForm><myTable></myTable>',
  outputs: ['advEvent'],
  providers:[AdvertisementsServices]
})

export class HomeComponent {
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