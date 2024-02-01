// client.module.ts
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { ClientComponent } from "./client.component";
import { ClientService } from "./client.service";
import { ClientDetailsModule } from "./client-details/client-details.module";

export const ClientRoutes: Routes = [
  {
    path: "client",
    component: ClientComponent,
  },
  {
    path: "client/:id",
    loadChildren: () => ClientDetailsModule,
  },
];

@NgModule({
  declarations: [ClientComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  providers: [ClientService],
})
export class ClientModule {}
