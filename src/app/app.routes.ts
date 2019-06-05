import {  Routes } from "@angular/router";
import { HomeComponent } from "./view/home/home.component";
import { AboutComponent } from "./view/about/about.component";
import { ApartmentsComponent } from "./view/apartment/apartments/apartments.component";


export const ROUTES : Routes = [

    {path:'', component: HomeComponent},
    {path:'apartments', component: ApartmentsComponent},
    {path:'about', component: AboutComponent},
    
]