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

  constructor(private serviceblock: BlockService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.serviceblock.findOne(this.route.snapshot.params['id'])
      .subscribe(block => this.block = block)
  }

}
