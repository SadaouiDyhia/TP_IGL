import { Component,Input,  OnInit } from '@angular/core';
import { grpService } from './../Services/grp.service';

@Component({
  selector: 'app-groupe',
  templateUrl: './groupe.component.html',
  styleUrls: ['./groupe.component.scss']
})
export class GroupeComponent implements OnInit {

  @Input() name: string  ; 

  constructor(private grpService : grpService) { 
   

  }

  ngOnInit() {}

  onAfficherEtud(){}
  setg1()
  {
    this.grpService.g1= true;
    this.grpService.g2= false;

  }

  setg2()
  {
    this.grpService.g1= false;
    this.grpService.g2= true;

  }

}
