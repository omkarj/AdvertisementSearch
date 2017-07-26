import {Component} from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import {AdvertisementsServices } from '../../service/advertisement.service';
import { Router } from '@angular/router';
@Component({
   selector: '<myTable>',
   templateUrl:'./mytable.html'
})

export class AdvertisementTable{
    router: any;
    //public product_data:Array<{productname:string,category:string,description:string}>=[];
   /* putAdvertise(newAdvertise:any){
        this.product_data.push(newAdvertise);
        //console.log(newAdvertise);
    }*/
    constructor(private advertiseService:AdvertisementsServices){}
    onDeleteClick(i:any){
       this.advertiseService.deleteAdvertise(i);     
    }
    onEditClick(i:any){
        //console.log("huhuuh",i);
        this.router.navigate('Page_2',i);
        //this.advertiseService.updateAdvertise(i);
        
    }
    retrieveAdvertiements(){
       return this.advertiseService.getAllAdvertise();

    }
}

@Pipe({name: 'FilterAdd'}) 

export class FilterAdd implements PipeTransform { 
    transform(value: Array<any>, args: string): any{
        let filterads:Array<any>=[];
        if(args.length>2)
            {
                args=args.toLowerCase();
                value.map(function(i){
                    if(i.productname.indexOf(args)>-1)
                        {
                            filterads.push(i);
                        }
                })
                    return filterads;
            }
        return value;
        
        
        //return filter ? value.filter(product_data=> product_data.name.toLocaleLowerCase().indexOf(filter) != -1) : value; 
    }
}