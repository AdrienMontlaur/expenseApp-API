import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { DetailClientComponent } from './detail-client/detail-client.component';

import { IonicModule } from '@ionic/angular';

import { ClientPage } from './client.page';
import { ClientsServicesService } from '../services/clients-services.service';


const routes: Routes = [
  {
    path: '',
    component: ClientPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,

    RouterModule.forChild(routes)
  ],
  declarations: [
    ClientPage,
    DetailClientComponent
  ],
  providers: [ClientsServicesService]
})

export class ClientPageModule {

}
