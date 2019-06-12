import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Apartment } from 'app/model/apartment.model';
import { API_BACKEND } from 'app/constant/constant';

import { ErrorHandler } from 'app/app.error.handler';

@Injectable()
export class ApartmentService {

  constructor(private http: Http) { }

  findAll(): Observable<Apartment[]>{
    return this.http.get(`${API_BACKEND}apartments`)
    .map(response => response.json())
    .catch(ErrorHandler.handleEnrror)
  }

  findAllByBlock(id){
    return this.http.get(`${API_BACKEND}apartments/block/${id}`)
    .map(response => response.json())
    .catch(ErrorHandler.handleEnrror)
  }

  

}
