import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Http, ResponseContentType } from '@angular/http';
import { ErrorHandler } from 'app/app.error.handler';
import { API_BACKEND } from 'app/constant/constant';


@Injectable()
export class FileService {

    constructor(private http: Http) { }

    findOne(id: any) {
        return this.http.get(`${API_BACKEND}file/${id}`, { responseType: ResponseContentType.Blob })
        .catch(ErrorHandler.handleEnrror)
    }



}