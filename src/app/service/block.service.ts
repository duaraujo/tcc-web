import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { API_BACKEND } from 'app/constant/constant';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Block } from '../model/block.model';
import { ErrorHandler } from 'app/app.error.handler';


@Injectable()
export class BlockService {

    constructor(private http: Http) { }

    findAll(): Observable<Block[]>{
        return this.http.get(API_BACKEND + "blocks")
            .map(response => response.json())
            .catch(ErrorHandler.handleEnrror)
    }

    findOne(id: string): Observable<Block>{
        return this.http.get(`${API_BACKEND}blocks/${id}`)
        .map(response => response.json())
        .catch(ErrorHandler.handleEnrror)
    }



}