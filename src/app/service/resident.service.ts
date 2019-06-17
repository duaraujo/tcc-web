import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { Resident } from 'app/model/resident.model';
import { Observable } from 'rxjs/Observable';
import { API_BACKEND } from 'app/constant/constant';

import { ErrorHandler } from 'app/app.error.handler';


@Injectable()
export class ResidentService {

  constructor(private http: Http) {
  }

  findAll(): Observable<Resident[]>{
    return this.http.get(`${API_BACKEND}residents`)
    .map(response => response.json())
    .catch(ErrorHandler.handleEnrror)
  }

  findAllByAp(id: number): Observable<Resident[]>{
    return this.http.get(`${API_BACKEND}residents/ap/${id}`)
    .map(response => response.json())
    .catch(ErrorHandler.handleEnrror)
  }

  findOne(id: number): Observable<Resident>{
    return this.http.get(`${API_BACKEND}residents/${id}`)
    .map(data => data.json())
    .catch(ErrorHandler.handleEnrror)
  }

  save(resident){
    return this.http.post(`${API_BACKEND}residents`, resident);
  }

  delete(id){
    return this.http.delete(`${API_BACKEND}residents/${id}`)
  }

  saveGallery(gallery: File[], name: string){
    const formData: FormData = new FormData();
    for(let i=0; i < gallery.length; i++){
      formData.append('files',gallery[i]);
    }
    return this.http.post(`${API_BACKEND}file/uploadMultipleFiles/${name}`, formData);
  }


  
}