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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    BlocksComponent,
    BlockComponent,
    ApartmentListComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [BlockService, ApartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }