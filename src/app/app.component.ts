import { Component,ViewChild } from '@angular/core';
import {AdvertisementTable } from './components/AdvertisementTableComponent/advertisement.table';
@Component({
   selector: 'my-app',
  template: `<myForm (advEvent)="storeAdvertise($event)"></myForm><myTable></myTable>`
})
export class AppComponent  {
  //currentAdvertise:any; 
  //currentAdvertise:Array<{productname:string,category:string,description:string}>=[];
  @ViewChild(AdvertisementTable) tableChild: AdvertisementTable;
  storeAdvertise(newAdvertise:any){
    //this.currentAdvertise.push(newAdvertise);
    this.tableChild.putAdvertise(newAdvertise);
    //this.currentAdvertise=newAdvertise;
  }
}
