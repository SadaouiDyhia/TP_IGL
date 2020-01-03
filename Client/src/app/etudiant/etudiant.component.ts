import { Component,Input ,  OnInit } from '@angular/core';
import 'rxjs/add/observable/interval';
import { grpService } from './../Services/grp.service';
import {Abs} from '../../models/Abs.model'
import {Grp} from '../../models/Grp.model'


@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.scss']
})
export class EtudiantComponent implements OnInit {
   A:Abs={id:undefined,abs:undefined}
   g:Grp={id:undefined,grp:undefined}
  @Input() id : string ;
  @Input() nom : string ;
  @Input() prenom : string ;
  @Input() abs  ; 
  nvgrp;
  nb = 0 ; 
  
 
  constructor(private grpService : grpService) {}
  /**
   * Fonction d'initialisation
   */
  ngOnInit() {};

  /**
   * Fonction qui soustrait 1 du nombre d'absence 
   */
  onDown(){
   if ( this.abs>0 ) {
    this.abs-=1 
    this.A.abs=-1
    this.A.id=this.id
   this.grpService.abs( this.A ).subscribe(
     (data : Abs)=>{}
   ) ;
  }
  };

  /**
   * Fonction qui augmente de 1 le nombre d'absences
   */

  onUp(){
   if ( this.abs< 3 ) {
    this.abs+=1 
    this.A.id=this.id
     this.A.abs=1
   
   this.grpService.abs( this.A ).subscribe(
    (data : Abs)=>{}
  ) ; ;
  }
  };

  /**
   * Fonction qui permet de changer le groupe de l'etudiant 
   */

  changerGrp()
  {
    this.g.id=this.id
    this.g.grp=this.nvgrp
    this.grpService.changerGroupe( this.g).subscribe(
      (data : Grp)=>{}
    ) ; ; ; 
  }

  IdGenerator() : number {
    this.nb += 1 ; 
    return this.nb; 
  }


}
