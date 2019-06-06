import {  Routes } from "@angular/router";

import { HomeComponent } from "./view/home/home.component";
import { AboutComponent } from "./view/about/about.component";
import { ResidentListComponent } from "./view/resident/resident-list/resident-list.component";
import { BlocksComponent } from "./view/block/blocks/blocks.component";


export const ROUTES : Routes = [

    {path:'', component: HomeComponent},
    {path:'blocks', component: BlocksComponent},
    {path:'blocks/:id', component: ResidentListComponent},
    {path:'about', component: AboutComponent},
    
]