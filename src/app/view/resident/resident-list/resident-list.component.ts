import { ResidentService } from './../../../service/resident.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-resident-list',
  templateUrl: './resident-list.component.html',
  styleUrls: ['./resident-list.component.css']
})
export class ResidentListComponent implements OnInit {

  public residents: any[] = [];

  constructor(
    private residentsService: ResidentService
    ) { }

  ngOnInit() {
    this.residents = this.residentsService.getResidents();
  }

  
}
