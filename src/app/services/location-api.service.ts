import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import {Observable} from 'rxjs'
import { LocationModel } from '../models/location-model.model'; 
@Injectable({
  providedIn: 'root'
})

export class LocationAPIService {

  getAllAPI = "http://10.30.40.121:3087/royalcass/reservation"
  getOneAPI ="http://10.30.40.121:3087/royalcass/lireUneReservation/"
  postAPI = "http://10.30.40.121:3087/royalcass/newReservation"
  putAPI = "http://10.30.40.121:3087/royalcass/upReservation/"
  delAPI = "http://10.30.40.121:3087/royalcass/delUneLocation/"

  constructor(private http:HttpClient) { }
  getAll():Observable<LocationModel[]>{
    return this.http.get<LocationModel[]>(`${this.getAllAPI}`);
  }

  create(data:any):Observable<any>{
    //confirmation du serveur
    return this.http.post(`${this.postAPI}`,data);
   }

   put(data: any, id: any ):Observable<any>{
    return this.http.put(`${this.putAPI}${id}`,data)
   }

   ReadOne( id: any ):Observable<LocationModel>{
    return this.http.get<LocationModel>(`${this.getOneAPI}${id}`)
   }

   delete_func(data:any, id:any):Observable<any>{
    return this.http.delete(`${this.delAPI}${id}`,data)
   }




}
