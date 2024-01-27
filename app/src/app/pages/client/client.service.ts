// client.service.ts
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ClientService {
  private apiUrl = "http://localhost:3000/api";

  constructor(private http: HttpClient) {}

  getClients(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/clients`);
  }

  getClientDetails(clientId: string): Observable<any> {
    const url = `${this.apiUrl}/clients/${clientId}`;
    return this.http.get(url);
  }

  getTotals(): Observable<any> {
    return this.getClients().pipe(
      catchError((error) => {
        console.error("Error fetching clients:", error);
        return of([]);
      }),
      map((clients) => {
        const totalClients = clients.length;
        const totalDevelopments = clients.reduce(
          (total, client) => total + client.enterprises.length,
          0
        );
        const totalProperties = clients.reduce((total, client) => {
          return (
            total +
            client.enterprises.reduce(
              (sum, enterprise) => sum + parseInt(enterprise.realties),
              0
            )
          );
        }, 0);

        return { totalClients, totalDevelopments, totalProperties };
      })
    );
  }
}
