import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import{map} from "rxjs/operators";
import { Band } from './Bands';




@Injectable({
  providedIn: 'root'
})
export class MetalumService {

  
baseUrl='http://localhost/api/';

  constructor(private http:HttpClient) { }

getAll(){
  return this.http.get(`${this.baseUrl}list`).pipe(
    map((res:any)=>{
      return res['data'];
    })
  )
}
library(band:Band){
  return this.http.post(`${this.baseUrl}/library`,{data:band},{responseType: 'text'}).pipe(
    map((res:any)=>{
      return res['data'];
    })
  )
}
update(band:Band){
  return this.http.put(`${this.baseUrl}/update`,{data:band}).pipe(

  )
}

delete(id:any){
  const params=new HttpParams()
  .set('id',id.toString());
  return  this.http.delete(`${this.baseUrl}/delete`,{params:params});

}


}
