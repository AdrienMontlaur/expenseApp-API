import { Component, OnInit } from '@angular/core';
import { ClientsServicesService } from '../services/clients-services.service';
import { EntreprisesServicesService } from '../services/entreprises-services.service';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { Client } from './model/client.model';

@Component({
  selector: 'app-client',
  templateUrl: './client.page.html',
  styleUrls: ['./client.page.scss'],
})

export class ClientPage implements OnInit {
  clients: any[];
  entreprises: any[];

  clientSelected: Client;

  radioGroupChange() {
    console.log(this.clientSelected);
    console.log(this.entreprises);
  }

  constructor(private router: Router, private apiService: ApiService) { }
  ngOnInit() {
    this.loadList();
    this.apiService.readEntreprises().subscribe((entreprises: EntreprisesServicesService[]) => {
      this.entreprises = entreprises;
      console.log(this.entreprises);
    });

  }
  goToDetails() {
    this.router.navigate(['/edit-client/', this.clientSelected]);
  }
  loadList() {
    this.apiService.readClients().subscribe((clients: Client[]) => {
    this.clients = clients;
    console.log(this.clients);
    });
    this.apiService.readEntreprises().subscribe((entreprises: EntreprisesServicesService[]) => {
    this.entreprises = entreprises;
    console.log(this.entreprises);
    });
  }
}
