import { FileService } from './service/file.service';
import { ApartmentListComponent } from './view/apartment/apartment-list/apartment-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { BlocksComponent } from './view/block/blocks/blocks.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './view/header/header.component';
import { HomeComponent } from './view/home/home.component';
import { AboutComponent } from './view/about/about.component'
import { ROUTES } from './app.routes';
import { BlockComponent } from './view/block/block.component';
import { BlockService } from './service/block.service';
import { ApartmentService } from './service/apartment.service';
import { ApartmentTemplateComponent } from './view/apartment/apartment-template/apartment-template.component';
import { MonitoringComponent } from './view/monitoring/monitoring.component';
import { ResidentListComponent } from './view/resident/resident-list/resident-list.component';
import { ResidentService } from './service/resident.service';
import { RecognitionComponent } from './view/recognition/recognition/recognition.component';
import { ResidentRegistryComponent } from './view/resident/resident-registry/resident-registry.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ResidentDetailComponent } from './view/resident/resident-detail/resident-detail.component';
import { ResidentsModule } from './view/resident/resident.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    BlocksComponent,
    BlockComponent,
    ApartmentListComponent,
    ApartmentTemplateComponent,
    MonitoringComponent,
    RecognitionComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    ResidentsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [BlockService, ApartmentService, ResidentService, FileService],
  bootstrap: [AppComponent]
})
export class AppModule { }