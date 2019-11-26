import { Component,Input,  OnInit } from '@angular/core';

@Component({
  selector: 'app-groupe',
  templateUrl: './groupe.component.html',
  styleUrls: ['./groupe.component.scss']
})
export class GroupeComponent implements OnInit {

  @Input() name: string  ; 

  constructor() { }

  ngOnInit() {}

  onAfficherEtud(){}

}
