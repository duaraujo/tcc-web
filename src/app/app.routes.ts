import {  Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ApartmentsComponent } from "./apartment/apartments/apartments.component";


export const ROUTES : Routes = [

    {path:'', component: HomeComponent},
    {path:'apartments', component: ApartmentsComponent},
    {path:'about', component: AboutComponent},
    
]