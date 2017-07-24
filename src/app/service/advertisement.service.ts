import { Injectable } from '@angular/core';

@Injectable()

export class AdvertisementsServices{
    public product_data:Array<{productname:string,category:string,description:string}>=[];
    getAllAdvertise(){
        return this.product_data;
    }
    deleteAdvertise(i:any){
      let index=this.product_data.indexOf(i);
        this.product_data.splice(index,1);
    }
    updateAdvertise(){
            }/*
    getAdvertise(){

    }*/
    putAdvertise(newAdvertise:any){
        this.product_data.push(newAdvertise);
    }
}
