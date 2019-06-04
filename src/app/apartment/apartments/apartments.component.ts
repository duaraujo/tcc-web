import { Component, OnInit } from '@angular/core';
import { Apartment } from '../apartment.model';
import { Apartmentservice } from '../apartment.service';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html'
})
export class ApartmentsComponent implements OnInit {

  apartments: Apartment[];

  constructor(private service: Apartmentservice) { }

  ngOnInit() {
    this.apartments = this.service.getapartments();
  }

}
