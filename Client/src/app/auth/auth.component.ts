import { Component, OnInit } from '@angular/core';
import { grpService } from './../Services/grp.service';
import 'rxjs/add/observable/interval';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  /**
  * Variable qui prend comme valeur la liste des etudiants du groupe2
  */
  liste: any[] ; 

  constructor(private httpClient: HttpClient, private grpService : grpService) { };

  /**
   * Fonction d'initialisation
   */
  ngOnInit() {

    this.grpService.getEtudiants2().subscribe((data)=>{
      this.liste=data})
  }

}
