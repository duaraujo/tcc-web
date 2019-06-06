import { Component, OnInit } from '@angular/core';

import { Block } from '../../../model/block.model';
import { BlockService } from '../../../service/block.service';


@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html'
})
export class BlocksComponent implements OnInit {

  blocks: Block[];

  constructor(private serviceblock: BlockService) { }

  ngOnInit() {
    this.serviceblock.findAll()
      .subscribe(blocks => this.blocks = blocks)     
  }

}