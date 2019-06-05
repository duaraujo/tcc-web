import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './view/header/header.component';
import { HomeComponent } from './view/home/home.component';
import { AboutComponent } from './view/about/about.component'
import { ROUTES } from './app.routes';
import { ApartmentComponent } from './view/apartment/apartment.component';
import { ApartmentsComponent } from './view/apartment/apartments/apartments.component';
import { ApartmentService } from './service/apartment.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ApartmentsComponent,
    ApartmentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ApartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
