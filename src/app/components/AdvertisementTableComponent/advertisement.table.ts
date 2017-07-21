import {Component} from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
@Component({
   selector: '<myTable>',
   templateUrl:'./mytable.html'
})

export class AdvertisementTable{
    public product_data:Array<{productname:string,category:string,description:string}>=[];
    putAdvertise(newAdvertise:any){
        this.product_data.push(newAdvertise);
        //console.log(newAdvertise);

    }
    onDeleteClick(i:any){
       let d=this.product_data.indexOf(i);
        this.product_data.splice(d);
        
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