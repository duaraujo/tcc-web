import { Component, OnInit, Input } from '@angular/core';

import { Block } from '../../../model/block.model';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html'
})
export class BlockComponent implements OnInit {

  @Input() block: Block;

  constructor() { }

  ngOnInit() {
  }

}