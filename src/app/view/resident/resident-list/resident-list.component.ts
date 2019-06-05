import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApartmentService } from 'app/service/apartment.service';
import { Apartment } from 'app/model/apartment.model';

@Component({
  selector: 'mt-resident-list',
  templateUrl: './resident-list.component.html',
  styleUrls: ['./resident-list.component.css']
})
export class ResidentListComponent implements OnInit {

  apartment: Apartment

  constructor(private serviceApartment: ApartmentService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.serviceApartment.findOne(this.route.snapshot.params['id'])
      .subscribe(apartment => this.apartment = apartment)
  }

}
