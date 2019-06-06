import { Component, OnInit, Input } from '@angular/core';

import { Apartment } from './../../../model/apartment.model';

@Component({
  selector: 'mt-apartment-template',
  templateUrl: './apartment-template.component.html'
})
export class ApartmentTemplateComponent implements OnInit {


  @Input() apartmentTemplate: Apartment
  
  constructor() { }

  ngOnInit() {
  }

}
