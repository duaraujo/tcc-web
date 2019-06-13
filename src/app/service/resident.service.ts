import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Resident } from 'app/model/resident.model';
import { Observable } from 'rxjs/Observable';
import { API_BACKEND } from 'app/constant/constant';

import { ErrorHandler } from 'app/app.error.handler';


@Injectable()
export class ResidentService {

  private residents: Resident[] = [
    {id: 1, name: 'João da Silva 01',  email: 'joao01@email.com',   phone:'99292-9393', imagePath:'./assets/img/face1.png', apartament:'99292-9393', dtnasc:'99292-9393', gender:'99292-9393', gallery: []},
    {id: 2, name: 'Carlos José 02',    email: 'carlos02@email.com', phone:'99292-9393', imagePath:'./assets/img/face2.png', apartament:'99292-9393', dtnasc:'99292-9393', gender:'99292-9393', gallery: []},
    {id: 3, name: 'Evila Mortagua 03', email: 'evila03@email.com',  phone:'99292-9393', imagePath:'./assets/img/face3.png', apartament:'99292-9393', dtnasc:'99292-9393', gender:'99292-9393', gallery: []},
    {id: 4, name: 'Felipe Santos 04',  email: 'felipe04@email.com', phone:'99292-9393', imagePath:'./assets/img/face4.png', apartament:'99292-9393', dtnasc:'99292-9393', gender:'99292-9393', gallery: []},
    {id: 5, name: 'Arthur Dias 05',    email: 'arthur05@email.com', phone:'99292-9393', imagePath:'./assets/img/face5.png', apartament:'99292-9393', dtnasc:'99292-9393', gender:'99292-9393', gallery: []}
  ];

  constructor(private http: Http) {
  }

  getResidents(){
    return this.residents;
  }
  
  findById(id: number){    
    for (let i=0; i < this.residents.length; i++){
      let resident = this.residents[i]; 
      if(resident.id == id){
        return resident;
      }
    }
    return null;
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


}