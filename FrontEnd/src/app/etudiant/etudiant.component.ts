import { Component,Input ,  OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { Subject } from 'rxjs/Subject';


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
 
  constructor() { }

  ngOnInit() {};

  onDown(){
   this.abs -= 1; 
  };

  onUp(){
   this.abs += 1;
  };

}
