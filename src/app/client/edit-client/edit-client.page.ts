import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from '../model/client.model';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.page.html',
  styleUrls: ['./edit-client.page.scss'],
})

export class editClientPage implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private apiService: ApiService) {}
  clientModif: Client = {
    cliId: null,
    cliNom: null,
    cliPrenom: null,
    cliNumeroTelephone: null,
    cliFonction: null,
    cliMail: null,
    entSiret: null,
    salId: null
  };


  createOrUpdateClient(form) {
    if (this.clientModif && this.clientModif.cliId) {
      form.value.cliId = +this.clientModif.cliId;
      console.log(form.value);
      this.apiService.updateClient(form.value).subscribe((clientModif: Client) => {
        window.location.reload();
        console.log("Client updated" , clientModif);
      });
    } else {
      this.apiService.createClient(form.value).subscribe((clientModif: Client) => {
        console.log(form.value);
        window.location.reload();
        console.log("Client created", clientModif);
      });
    }
    this.router.navigate(['/client']);
  }


  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.clientModif.cliId = params['cliId'];
      this.clientModif.cliNom = params['cliNom'];
      this.clientModif.cliPrenom = params['cliPrenom'];
      this.clientModif.cliNumeroTelephone = params['cliNumeroTelephone'];
      this.clientModif.cliFonction = params['cliFonction'];
      this.clientModif.cliMail = params['cliMail'];
      this.clientModif.entSiret = params['entSiret'];
      this.clientModif.salId = params['salId'];

      console.log(this.clientModif);
    });
  }

}
