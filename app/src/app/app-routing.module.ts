import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NavbarComponent } from "./navigation/navbar.component";
import { EnterpriseRoutes } from "./pages/enterprise/enterprise.module";
import { ClientModule, ClientRoutes } from "./pages/client/client.module"; 

const routes: Routes = [
  {
    path: "",
    component: NavbarComponent,
    children: [
      ...EnterpriseRoutes,
      ...ClientRoutes
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ClientModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
