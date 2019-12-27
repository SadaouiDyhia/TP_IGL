import { Component,Input ,  OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { Subject } from 'rxjs/Subject';
import { grpService } from './../Services/grp.service';


@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.scss']
})
export class EtudiantComponent implements OnInit {
   
  @Input() id : string ;
  @Input() nom : string ;
  @Input() prenom : string ;
  @Input() abs  ; 

  nvgrp : number;  
 
  constructor(private grpService : grpService) {}

  ngOnInit() {};

  onDown(){
   if ( this.abs>0 ) {this.abs -= 1; 
   this.grpService.abs( this.id , -1 ) ;
  }
  };

  onUp(){
   if ( this.abs< 3 ) {this.abs += 1;
  this.grpService.abs ( this.id, 1 ) ;
  }
  };

  changerGrp()
  {
    this.grpService.changerGroupe( this.id , this.nvgrp) ; 
  }

}
