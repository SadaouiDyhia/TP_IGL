import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class grpService {

    tabres : any[];
    listServer1 : any[];
    ListServer2 : any[]; 
    

    g1=true ; 
    g2=false ; 
  
   constructor(private httpClient: HttpClient) { }


   

   saveGroupesToServer() {
    this.httpClient
      .post('https://localhost:3000/TEST.json', this.tabg)
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
      .get<any[]>('https://localhost:3000/TEST.json')
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


    recupListeGrpFromServer() {
      this.httpClient
        .get<any[]>('https://localhost:3000/TEST.json')
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
        this.httpClient
          .get<any[]>('https://localhost:3000/TEST.json')
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

    abs ( idd : string , num : number )
    { 
      var tab : any [] ;
      tab[0]=idd ; 
      tab[1]=num ; 
    

      this.httpClient
      .post('https://localhost:3000/TEST.json', tab )
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
       
    }

    changerGroupe( id : string , nvgr : string ){
      var tab : any [] ;
      tab[0]=id ; 
      tab[1]=nvgr ; 
    

      this.httpClient
      .post('https://localhost:3000/TEST.json', tab )
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );

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

  liste1 =[
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