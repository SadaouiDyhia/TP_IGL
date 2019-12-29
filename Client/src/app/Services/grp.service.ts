import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Etudiant} from '../../models/Etudiant.model';
import {Abs} from '../../models/Abs.model';
import {Grp} from '../../models/Grp.model';
import 'rxjs/add/Observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Injectable()

export class grpService {

    tabres : any[];
    listServer1 : any[];
    ListServer2 : any[]; 
    

    g1=true ; 
    g2=false ; 
  
   constructor(private httpClient: HttpClient) { }
  getEtudiants1(): Observable<Etudiant[]> {
      return this.httpClient.get<Etudiant[]>('http://localhost:3000/api/tp/one');
  }
  getEtudiants2(): Observable<Etudiant[]> {
    return this.httpClient.get<Etudiant[]>('http://localhost:3000/api/tp/two');
}
  abs (A:Abs ):Observable<Abs>
  { 
    return this.httpClient.post<Abs>('http://localhost:3000/api/tp/Absence',A,
    {headers:new HttpHeaders({
      'Content-type':'application/json'
    })} );
     
  } 

   saveGroupesToServer() {
    this.httpClient
      .post('https://localhost:3000/TEST.json', this.listee)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
   }

   


    recupListeGrpFromServer() {
     
      return this
      .httpClient
      .get<any[]>('https://localhost:3000/')
      .subscribe(
          (response) => {
            this.listServer1 = response;
            
            //this.emitAppareilSubject();
          },
          (error) => {
            console.log('Erreur ! : ' + error);
          }
        );
      }

      recupListeGrp2FromServer() {
        console.log("vjfvuaf")
        this.httpClient
          .get<any[]>('https://localhost:3000/')
          .subscribe(
            (response) => {
              this.ListServer2 = response;
              
              //this.emitAppareilSubject();
            },
            (error) => {
              console.log('Erreur ! : ' + error);
            }
          );
        }
        
    getGroupesFromServer() {
    this.httpClient
      .get<any[]>('https://localhost:3000/')
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
   

    changerGroupe( g:Grp ){
    return this.httpClient.post<Grp>('http://localhost:3000/api/tp/changer',g,
    {headers:new HttpHeaders({
      'Content-type':'application/json'
    })} );

    }


  
   tabg = [

    {
    name: 'groupe 1'
    },

    {
    name: 'groupe 2'
    },
     
  ];

  
  listee = [

    {
    id: '17/0047',
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

  liste1 =[
    {
      id: '17/0047',
      nom:'Malik ',
      prenom:' Mehdi',
      abs : 0  
      },
  
      {
      id: '17/003',
      nom:'Man ',
      prenom:' Leibnigs',
      abs : 0
      }


  ]

  liste2 =[

    {
      id: '17/004',
      nom:'Frau ',
      prenom:' Manchmal',
      abs : 0
      } 
       
   

  ]




  


  

}