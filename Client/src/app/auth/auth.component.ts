import { Component, OnInit } from '@angular/core';
import { grpService } from './../Services/grp.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  liste: any[] ; 

  constructor(private httpClient: HttpClient, private grpService : grpService) { };

  ngOnInit() {

    this.grpService.recupListeGrp2FromServer; //listServer2
    this.liste= this.grpService.liste2;
  }

}
