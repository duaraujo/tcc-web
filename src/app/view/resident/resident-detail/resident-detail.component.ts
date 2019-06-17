import { FileService } from './../../../service/file.service';
import { ResidentService } from './../../../service/resident.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Resident } from 'app/model/resident.model';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Response } from '@angular/http';

@Component({
  selector: 'mt-resident-detail',
  templateUrl: './resident-detail.component.html',
  styleUrls: ['./resident-detail.component.css']
})
export class ResidentDetailComponent implements OnInit, OnDestroy {

  resident: Resident;
  inscricao: Subscription;
  photo: any;
  
  constructor(
    private rotaAtiva: ActivatedRoute,
    private fileService: FileService,
    private residentService: ResidentService) { }

    ngOnInit() {
      this.inscricao = this.rotaAtiva.params.subscribe(
        (params: Resident) => {
        this.photo = null;
          let id = params['id'];
          this.residentService.findOne(id)
          .subscribe( data => {this.resident = data;this.getPhoto()})
        }
      );
    }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

  getPhoto() {
    if(this.resident.gallery.length > 0 ){
      this.fileService.findOne(this.resident.gallery[0].id, this.resident.name).subscribe((data: Response) => {
        this.createImageFromBlob(data.blob());
      });
    }
  }

createImageFromBlob(image: Blob) {
   let reader = new FileReader();
   reader.addEventListener("load", () => {
      this.photo = reader.result;
   }, false);

   if (image) {
      reader.readAsDataURL(image);
   }
}

}