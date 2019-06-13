import { NgModule } from "@angular/core";
import { ResidentDetailComponent } from "./resident-detail/resident-detail.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ResidentsRoutingModule } from "./resident.routing.module";
import { ResidentService } from "app/service/resident.service";
import { ResidentListComponent } from "./resident-list/resident-list.component";
import { ResidentRegistryComponent } from "./resident-registry/resident-registry.component";


@NgModule({
    declarations: [
      ResidentListComponent,
      ResidentDetailComponent,
      ResidentRegistryComponent
    ],
    imports: [
      CommonModule,
      FormsModule,
      ResidentsRoutingModule
    ],
    providers: [
      ResidentService
    ],
    bootstrap: []
  })

export class ResidentsModule { }
  