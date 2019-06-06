import {  Routes } from "@angular/router";

import { HomeComponent } from "./view/home/home.component";
import { AboutComponent } from "./view/about/about.component";
import { BlocksComponent } from "./view/block/blocks/blocks.component";
import { ApartmentListComponent } from "./view/apartment/apartment-list/apartment-list.component";


export const ROUTES : Routes = [

    {path:'', component: HomeComponent},
    {path:'blocks', component: BlocksComponent},
    {path:'blocks/:id', component: ApartmentListComponent},
    {path:'about', component: AboutComponent},
    
]