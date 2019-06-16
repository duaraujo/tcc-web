import { MonitoringComponent } from './view/monitoring/monitoring.component';
import {  Routes } from "@angular/router";

import { HomeComponent } from "./view/home/home.component";
import { AboutComponent } from "./view/about/about.component";
import { BlocksComponent } from "./view/block/block-list/blocks.component";
import { ApartmentListComponent } from "./view/apartment/apartment-list/apartment-list.component";
import { ResidentListComponent } from "./view/resident/resident-list/resident-list.component";
import { ResidentRegistryComponent } from "./view/resident/resident-registry/resident-registry.component";
import { ResidentDetailComponent } from './view/resident/resident-detail/resident-detail.component';
import { LoginComponent } from './view/login/login.component';


export const ROUTES : Routes = [

    {path:'',               component: HomeComponent},
    {path:'login',         component: LoginComponent},    
    {path:'blocks',         component: BlocksComponent},
    {path:'blocks/:id',     component: ApartmentListComponent},
    {path:'apartments/:id', component: ResidentListComponent},
    {
        path:'apartments/:id', 
        component: ResidentListComponent,
        children: [
            {
                path: ':id',
                component: ResidentDetailComponent
            }
        ]
    },
    {path:'about',          component: AboutComponent},
    {path:'monitoring',     component: MonitoringComponent},
    {path:'registration',   component: ResidentRegistryComponent},
    
]