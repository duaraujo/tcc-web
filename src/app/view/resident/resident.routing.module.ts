import { ResidentListComponent } from "./resident-list/resident-list.component";
import { ResidentDetailComponent } from "./resident-detail/resident-detail.component";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ResidentRegistryComponent } from "./resident-registry/resident-registry.component";

const RESIDENTS_ROUTES = [
    {path: 'residents', component: ResidentListComponent, children: [
        {path: 'novo', component: ResidentRegistryComponent},
        {path: ':id', component: ResidentDetailComponent},
    ]},
];

@NgModule({
    imports: [RouterModule.forChild(RESIDENTS_ROUTES)],
    exports: [RouterModule]
})
export class ResidentsRoutingModule {}