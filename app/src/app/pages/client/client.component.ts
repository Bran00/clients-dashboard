// src/app/pages/client/client.component.ts
import { Component, OnInit } from "@angular/core";
import { ClientService } from "./client.service";
import { NgZone } from "@angular/core";
import './client.component.scss';


@Component({
  selector: "app-client",
  templateUrl: "./client.component.html",
  styleUrls: ["./client.component.scss"],
})
export class ClientComponent implements OnInit {
  clients: any[] = [];
  searchTerm: string = "";
  totalClients: number = 0;
  totalDevelopments: number = 0;
  totalProperties: number = 0;

  filteredClients: any[] = []; //

  constructor(private clientService: ClientService, private ngZone: NgZone) {}

  ngOnInit(): void {
    this.loadClients();
    this.loadTotals();
  }

  loadClients(): void {
    this.clientService.getClients().subscribe((data) => {
      this.clients = data;
      this.filteredClients = [...this.clients];
    });
  }

  loadTotals(): void {
    this.clientService.getTotals().subscribe((totals) => {
      console.log("Totals:", totals);
      this.totalClients = totals.totalClients;
      this.totalDevelopments = totals.totalDevelopments;
      this.totalProperties = totals.totalProperties;

      console.log("Total Clients:", this.totalClients);
      console.log("Total Developments:", this.totalDevelopments);
      console.log("Total Properties:", this.totalProperties);
    });
  }

  onSearch(): void {
    if (!this.searchTerm) {
      this.filteredClients = [...this.clients];
    } else {
      this.filteredClients = this.clients.filter((client) =>
        client.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
}
