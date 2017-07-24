import {Component,EventEmitter,Input,Output} from '@angular/core';

@Component({
   selector: 'myForm',
  templateUrl:'./myform.html',
  outputs:['advEvent']
})

export class AdvertisementForm{
  title:string='Product Info';
  items:string[]=['Furniture', 'Hardware', 'Mobile'];
  advEvent=new EventEmitter<Object>();
  //newAdvertise:Array<{productname:string,category:string,description:string}>=[];
  onOkClick(productname:string,description:string,category:string){    
    //this.newAdvertise.push({productname,category,description});
    let newAdvertise={productname,category,description};
    this.advEvent.emit(newAdvertise);
  }
}