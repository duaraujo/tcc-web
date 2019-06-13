import { ResidentService } from './../../../service/resident.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-resident-list',
  templateUrl: './resident-list.component.html',
  styleUrls: ['./resident-list.component.css']
})
export class ResidentListComponent implements OnInit {

  public residents: any[] = [];

  constructor(
    private residentsService: ResidentService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.residentsService.findAllByAp(this.route.snapshot.params['id'])
    .subscribe(data => this.residents = data); 
  }

}