
import { Component, OnInit } from '@angular/core';
import { grpService } from './../Services/grp.service';
import 'rxjs/add/observable/interval';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Etudiant } from 'src/models/Etudiant.model';
import { Abs } from 'src/models/Abs.model';



@Component({
  selector: 'app-all-view',
  templateUrl: './all-view.component.html',
  styleUrls: ['./all-view.component.scss']
})

@Injectable()
export class AllViewComponent implements OnInit {
 /**
  * Variable qui prend comme valeur la liste des etudiants du groupe1
  */
liste: Etudiant[] ; 

constructor(private httpClient: HttpClient, private grpService : grpService) { };

   /**
   * Fonction d'initialisation
   */
   ngOnInit() {
    
     
      this.grpService.getEtudiants1().subscribe((data)=>{
        this.liste=data
      }) 
      

  };

  
   
  

}