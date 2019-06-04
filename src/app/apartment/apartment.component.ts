import { Component, OnInit, Input } from '@angular/core';
import { Apartment } from './apartment.model';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html'
})
export class ApartmentComponent implements OnInit {

  @Input() apartment: Apartment;

  constructor() { }

  ngOnInit() {
  }

}
