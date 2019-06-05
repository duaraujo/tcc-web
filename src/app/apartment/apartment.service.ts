import { Apartment } from './apartment.model';
import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { API_BACKEND } from 'app/app.api';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class ApartmentService {

    constructor(private http: Http) { }

    getApartments(): Observable<Apartment[]>{
        return this.http.get(API_BACKEND + "/apartments").map(response => response.json())
    }

}