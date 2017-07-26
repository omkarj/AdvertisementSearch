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
    updateAdvertise(i:any){
        this.product_data = i;
    }
    putAdvertise(newAdvertise:any){
        this.product_data.push(newAdvertise);
    }

   /* postAd() {
        //let url = "http://192.168.3.144:9000/postAd"; //Akshay machine
        let url = "http://192.168.3.242:9000/postAd"; //Anand's machine
        //let headers = new Headers([{ 'Content-Type': 'application/json' },
        //                            {'auth-token': '5976e85d29226d1aa3c8e17d'}]);
        let headers = new Headers();
        headers.append('auth-token', '5976e85d29226d1aa3c8e17d');
        headers.append('Content-Type', 'application/json');

        let options = new RequestOptions({ headers: headers });
        let jsonReq = {"title": "Mobile sale", "name": "ABC", "category": "Mobile", "description": "Mi 5"};
        return this._http.post(url, jsonReq, options)
			.map((response: Response)=>response.json());

    }*/
}
