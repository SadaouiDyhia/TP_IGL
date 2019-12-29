import { Component,Input ,  OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { Subject } from 'rxjs/Subject';
import { grpService } from './../Services/grp.service';
import {Abs} from '../../models/Abs.model'
import {Grp} from '../../models/Grp.model'
import { isUndefined } from 'util';


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

<<<<<<< HEAD
  
=======
  nvgrp : number;  
>>>>>>> ed39d15ddd26ede350d7e14e8f887fd93e9b5db0
 
  constructor(private grpService : grpService) {}

  ngOnInit() {};

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

  changerGrp()
  {
    this.g.id=this.id
    this.g.grp=this.nvgrp
    this.grpService.changerGroupe( this.g).subscribe(
      (data : Grp)=>{}
    ) ; ; ; 
  }

}
