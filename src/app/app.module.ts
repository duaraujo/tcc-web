import { ResidentListComponent } from './view/resident/resident-list/resident-list.component';
import { FormsModule } from '@angular/forms';
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
import { ResidentService } from './service/resident.service';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './view/login/login.component';
import { AuthService } from './view/login/auth.service';
import { ResidentDetailComponent } from './view/resident/resident-detail/resident-detail.component';
import { ResidentRegistryComponent } from './view/resident/resident-registry/resident-registry.component';


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
    LoginComponent,
    ResidentDetailComponent,
    ResidentListComponent,
    ResidentRegistryComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [BlockService, ApartmentService, AuthService , ResidentService, FileService],
  bootstrap: [AppComponent]
})
export class AppModule { }