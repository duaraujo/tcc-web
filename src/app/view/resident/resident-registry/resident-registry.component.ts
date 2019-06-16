import { Apartment } from './../../../model/apartment.model';
import { ApartmentService } from './../../../service/apartment.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Resident } from 'app/model/resident.model';
import { ResidentService } from 'app/service/resident.service';
import { Response } from '@angular/http';

@Component({
  selector: 'mt-resident-registry',
  templateUrl: './resident-registry.component.html',
  styleUrls: ['./resident-registry.component.css']
})
export class ResidentRegistryComponent implements OnInit {

  @ViewChild("video")
  public video: ElementRef;
  @ViewChild("canvas")
  public canvas: ElementRef;
  
  public resident: Resident = new Resident();
  public apartments: Apartment[] = [];

  public gallery: Array<any> = [];
  public galleryBlob: Array<File> = [];

  form: FormGroup;
  success: boolean = false;

  public constructor(
    private residentService: ResidentService,
    private apartmentService: ApartmentService
    ) {    
  }

  ngOnInit() {
    this.apartmentService.findAll()
    .subscribe(data => this.apartments = data); 
  }

  public save(){
    this.residentService.saveGallery(this.galleryBlob).subscribe(
      (data: Response) => {
        this.resident.gallery = data.json();
        console.log(this.resident);
        this.residentService.save(this.resident).subscribe(
          data => {

          }
        )
        this.success = true;
      }
    )
  }

  removePhoto(){
    this.gallery = [];
    this.galleryBlob = [];
  }

  /* removePhoto(i){
    this.gallery.splice(i,1);
    this.galleryBlob.splice(i,1);
  } */

  public openCam() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(stream => {
        this.video.nativeElement.srcObject = stream;
        this.video.nativeElement.play();
      });
    }
  }

  public capture() {
    var context = this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0, 640, 480);
    this.gallery.push(this.canvas.nativeElement.toDataURL("image/png"));
    this.galleryBlob.push(this.b64toBlob(this.canvas.nativeElement.toDataURL("image/png")));
  }

  public b64toBlob(base64) {
    let contentType = base64.split(';')[0];
    let byteString = atob(base64.split(';')[1].split(',')[1]);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }

    let blob = new Blob([int8Array], {type: contentType});
    let file: File = <File>blob;
    return file;
  }
}