import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class grpService {
  
   constructor(private httpClient: HttpClient) { }



   saveGroupesToServer() {
    this.httpClient
      .post('https://tp-igl.firebaseio.com/grp.json', this.tabg)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
   }

   getGroupesFromServer() {
    this.httpClient
      .get<any[]>('https://tp-igl.firebaseio.com/grp.json')
      .subscribe(
        (response) => {
          this.tabres = response;
          console.log(response[0]);
          //this.emitAppareilSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
}

   grp = 7 ; 
  

   tabg = [

    {
    name: 'groupe 1'
    },

    {
    name: 'groupe 2'
    },

    {
    name: 'groupe 3'
    } 
     
  ];

  listee = [

    {
    id: '17/002',
    nom:'Malik ',
    prenom:' Mehdi',
    abs : 0  
    },

    {
    id: '17/003',
    nom:'Man ',
    prenom:' Leibnigs',
    abs : 0
    },

    {
    id: '17/004',
    nom:'Frau ',
    prenom:' Manchmal',
    abs : 0
    } 
     
  ];

  tabres : any[];

}