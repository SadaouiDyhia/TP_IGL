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

<<<<<<< HEAD
    this.grpService.getEtudiants2().subscribe((data)=>{
      this.liste=data})
=======
    this.grpService.recupListeGrp2FromServer; //listServer2
    this.liste= this.grpService.liste2;
>>>>>>> ed39d15ddd26ede350d7e14e8f887fd93e9b5db0
  }

}
