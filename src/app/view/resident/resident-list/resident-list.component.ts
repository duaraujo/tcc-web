import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BlockService } from 'app/service/block.service';
import { Block } from 'app/model/block.model';

@Component({
  selector: 'mt-resident-list',
  templateUrl: './resident-list.component.html',
  styleUrls: ['./resident-list.component.css']
})
export class ResidentListComponent implements OnInit {

  block: Block

  constructor(private serviceblock: BlockService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.serviceblock.findOne(this.route.snapshot.params['id'])
      .subscribe(block => this.block = block)
  }

}
