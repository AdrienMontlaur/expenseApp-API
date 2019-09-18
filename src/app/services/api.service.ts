import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientsServicesService } from '../services/clients-services.service';
import { EntreprisesServicesService } from '../services/entreprises-services.service';
import { Observable } from 'rxjs';
import { Client } from '../client/model/client.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  PHP_API_SERVER = 'http://127.0.0.1:80';

  //Client API
  readClients(): Observable<Client[]> {
    return this.httpClient.get<Client[]>
    (`${this.PHP_API_SERVER}/expenseCommercial/expenseApp/apiApp/clients/read.php`);
  }
  createClient(client: Client): Observable<Client> {
    return this.httpClient.post<Client>
    (`${this.PHP_API_SERVER}/expenseCommercial/expenseApp/apiApp/clients/create.php`, client);
  }
  deleteClient(client: Client): Observable<Client> {
    
  }
  updateClient(client: Client): Observable<Client> {
    return this.httpClient.put<Client>
    (`${this.PHP_API_SERVER}/expenseCommercial/expenseApp/apiApp/clients/update.php`, client);
  }

  //Entreprise API
  readEntreprises(): Observable<EntreprisesServicesService[]> {
    return this.httpClient.get<EntreprisesServicesService[]>
    (`${this.PHP_API_SERVER}/expenseCommercial/expenseApp/apiApp/entreprises/read.php`);
  }

  constructor(private httpClient: HttpClient) { }
}
