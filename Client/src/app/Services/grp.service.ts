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
    
  /**
   * variable qui permet de savoir qu'elle liste d'etudiant afficher 
   * a partir de l'interaction de l'utilisateru avec le front : 
   * Liste groupe 1 
   */
    g1=true ; 

    /**
   * variable qui permet de savoir qu'elle liste d'etudiant afficher 
   * a partir de l'interaction de l'utilisateru avec le front : 
   * Liste groupe 1 
   */
    g2=false ; 
  
   constructor(private httpClient: HttpClient) { }

   /**
    * Fonction qui permet de recuperer la liste des etudiants du groupe1 a partir du backend 
    */
  getEtudiants1(): Observable<Etudiant[]> {
      return this.httpClient.get<Etudiant[]>('http://localhost:3000/api/tp/one');
  }

  /**
    * Fonction qui permet de recuperer la liste des etudiants du groupe2 a partir du backend 
    */
  getEtudiants2(): Observable<Etudiant[]> {
    return this.httpClient.get<Etudiant[]>('http://localhost:3000/api/tp/two');
}

/**
    * Fonction qui permet de signaler l'augmantation/diminution du nombre d'absence d'un etudiant
    * au backend 
    * @param A parametre qui indique la nouvelle valeur de l'absence
    */
  abs (A:Abs ):Observable<Abs>
  { 
    return this.httpClient.post<Abs>('http://localhost:3000/api/tp/Absence',A,
    {headers:new HttpHeaders({
      'Content-type':'application/json'
    })}
     );
     
  } 

  /**
    * Fonction qui permet de signaler le changement de groupe d'un etudiant
    * au backend 
    * @param g parametre qui indique la nouvelle valeur du groupe 
    */

   changerGroupe( g:Grp ){
    return this.httpClient.post<Grp>('http://localhost:3000/api/tp/changer',g,
    {headers:new HttpHeaders({
      'Content-type':'application/json'
    })} );

    }

}