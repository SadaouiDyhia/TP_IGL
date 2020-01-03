
import { Component , OnInit} from '@angular/core';
import { grpService } from './Services/grp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

/**
 *  Cette class affiche l'interface de l'application
 */

export class AppComponent {

  /**
   * Variable qui prends la valeur de la liste a afficher 
   */
 
   liste: any[] ; 
   constructor(private grpService : grpService)
   {

   } 

  /**
    * Cette fonction affiche la liste des etudiants du groupe1
    */

   setg1()
   {
    this.grpService.g1= true;
    this.grpService.g2= false;

   }

  /**
    * Cette fonction affiche la liste des etudiants du groupe2
    */

   setg2()
   {
    this.grpService.g1= false;
    this.grpService.g2= true;

   }

 ngOnInit() {

   if ( this.grpService.g1 ) {

    this.grpService.getEtudiants1().subscribe((data)=>{
      this.liste=data
    }); 
    
  }
    else{
      this.grpService.getEtudiants2().subscribe((data)=>{
        this.liste=data})
    }}
  
  }
