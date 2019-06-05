import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { API_BACKEND } from 'app/constant/constant';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Apartment } from '../model/apartment.model';
import { ErrorHandler } from 'app/app.error.handler';


@Injectable()
export class ApartmentService {

    constructor(private http: Http) { }

    findAll(): Observable<Apartment[]>{
        return this.http.get(API_BACKEND + "apartments")
            .map(response => response.json())
            .catch(ErrorHandler.handleEnrror)
    }

    findOne(id: string): Observable<Apartment>{
        return this.http.get(`${API_BACKEND}apartments/${id}`)
        .map(response => response.json())
        .catch(ErrorHandler.handleEnrror)
    }

}