import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";

interface Client {
  name: string;
  _id: string;
  image_src: string;
  enterprises: number;
  realties: number;
}

@Injectable({
  providedIn: "root",
})
export class ClientService {
  private apiUrl = "http://localhost:3000/clients";

  constructor(private http: HttpClient) {}

  getClients(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/`).pipe(
      map((response) => response.data),
      catchError((error) => {
        console.error("Error fetching clients:", error);
        return of([]);
      })
    );
  }

  getClientDetails(clientId: string): Observable<any> {
    const url = `${this.apiUrl}/${clientId}`;
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
          (total, client) => total + client.enterprises,
          0
        );
        const totalProperties = clients.reduce((total, client) => {
          return (
            total +
            (typeof client.realties === "string"
              ? parseInt(client.realties, 10)
              : client.realties || 0)
          );
        }, 0);

        return { totalClients, totalDevelopments, totalProperties };
      })
    );
  }
}
