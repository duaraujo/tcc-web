import { ApartmentService } from './../../../service/apartment.service';
import { Apartment } from './../../../model/apartment.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BlockService } from 'app/service/block.service';
import { Block } from 'app/model/block.model';

@Component({
  selector: 'app-apartment-list',
  templateUrl: './apartment-list.component.html'
})
export class ApartmentListComponent implements OnInit {

  block: Block
  apartments: Apartment[] = []

  constructor(private serviceBlock: BlockService,
              private route: ActivatedRoute,
              private serviceApartment: ApartmentService) { }

  ngOnInit() {
    this.findOne();
    this.findAll();
  }

  findOne(){
    this.serviceBlock.findOne(this.route.snapshot.params['id'])
      .subscribe(block => this.block = block)
  }

  findAll(){
    this.serviceApartment.findAllByBlock(this.route.snapshot.params['id'])
    .subscribe(data => this.apartments = data); 
  }


}