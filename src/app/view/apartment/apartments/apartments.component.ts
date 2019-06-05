import { Component, OnInit } from '@angular/core';

import { Apartment } from '../../../model/apartment.model';
import { ApartmentService } from '../../../service/apartment.service';


@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html'
})
export class ApartmentsComponent implements OnInit {

  apartments: Apartment[];

  constructor(private service: ApartmentService) { }

  ngOnInit() {
    this.service.getApartments()
      .subscribe(apartments => this.apartments = apartments)     
  }

}