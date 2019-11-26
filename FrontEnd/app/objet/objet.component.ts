import { Component, OnInit } from '@angular/core';
//import { grpService } from './Services/grp.service';

@Component({
  selector: 'app-objet',
  templateUrl: './objet.component.html',
  styleUrls: ['./objet.component.scss']
})


export class ObjetComponent {

  //ObjetComponent = new Subject<any[]>();

  

  private appareils = [
    {
      id: 1,
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      id: 2,
      name: 'Frigo',
      status: 'allumé'
    },
    {
      id: 3,
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];
  


  ngOnInit() {
  }

}
