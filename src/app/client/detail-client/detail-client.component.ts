import { Component, OnInit } from '@angular/core';
import { ClientPage } from '../client.page';

@Component({
  selector: 'app-detail-client',
  templateUrl: './detail-client.component.html',
  styleUrls: ['./detail-client.component.scss'],
})
export class DetailClientComponent implements OnInit {
  client;
  constructor(private clientPage: ClientPage) {
    this.client = clientPage.clientSelected ;
   }

  ngOnInit() {}

}
