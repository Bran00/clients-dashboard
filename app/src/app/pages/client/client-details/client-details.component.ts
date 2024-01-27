// client-details.component.ts
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ClientService } from "../client.service";
import "./client-details.component.scss"

@Component({
  selector: "app-client-details",
  templateUrl: "./client-details.component.html",
  styleUrls: ["./client-details.component.scss"],
})
export class ClientDetailsComponent implements OnInit {
  clientId: string;
  clientDetails: any;

  constructor(
    private route: ActivatedRoute,
    private clientService: ClientService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.clientId = params.get("id");
      this.loadClientDetails();
    });
  }

  loadClientDetails(): void {
    this.clientService.getClientDetails(this.clientId).subscribe((details) => {
      this.clientDetails = details;
    });
  }

  getTotalProperties(): number {
    if (this.clientDetails && this.clientDetails.enterprises) {
      return this.clientDetails.enterprises.reduce(
        (total, enterprise) => total + parseInt(enterprise.realties),
        0
      );
    } else {
      return 0;
    }
  }
}
