import { Component,Input ,  OnInit } from '@angular/core';

@Component({
  selector: 'app-etat',
  templateUrl: './etat.component.html',
  styleUrls: ['./etat.component.scss']
})

export class EtatComponent implements OnInit {

    appareilName: string = 'Machine X';
    state= false ; 

    
  constructor() { }

  ngOnInit() {}

  statue() { return this.state ; }

}
