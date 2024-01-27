// client-details.module.ts
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClientDetailsComponent } from "./client-details.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: ClientDetailsComponent,
  },
];

@NgModule({
  declarations: [ClientDetailsComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [ClientDetailsComponent],
})
export class ClientDetailsModule {}
