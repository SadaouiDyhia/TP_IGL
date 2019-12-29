
import { Component, OnInit } from '@angular/core';
import { grpService } from './../Services/grp.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { Subject } from 'rxjs/Subject';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Etudiant } from 'src/models/Etudiant.model';



@Component({
  selector: 'app-all-view',
  templateUrl: './all-view.component.html',
  styleUrls: ['./all-view.component.scss']
})

@Injectable()
export class AllViewComponent implements OnInit {

  secondes: number; 


liste: Etudiant[] ; 
liste1:any[];
liste2:any[];
m:number

constructor(private httpClient: HttpClient, private grpService : grpService) { };


onSave() {
  this.grpService.saveGroupesToServer();
}

onRecup() {
  this.grpService.getGroupesFromServer();
}


   ngOnInit() {
    
<<<<<<< HEAD
      this.grpService.getEtudiants1().subscribe((data)=>{
        this.liste=data
      })
=======

   // this.liste.values()[1]= this.grpService.listee.values()[1];  
    
      this.grpService.recupListeGrpFromServer; // listServer1
      this.liste= this.grpService.liste1;
      




     //this.liste= this.grpService.listee ; 
   
    /*
    const counter = Observable.interval(1000);

    counter.subscribe(
      (value) => {
        this.secondes = value;
      },
      (error) => {
        console.log('Uh-oh, an error occurred! : ' + error);
      },
      () => {
        console.log('Observable complete!');
      }

      
    );*/


>>>>>>> ed39d15ddd26ede350d7e14e8f887fd93e9b5db0
  }



  onFonction()
  {
    console.log('Hey, le boutton vient d"etre cliqué')
  };


  

}