import { Component , OnInit} from '@angular/core';
import { grpService } from './Services/grp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

   tab : any[] ;
   liste: any[] ; 

   constructor(private grpService : grpService)
   {

   } 

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

   ngOnInit() {

   this.tab = this.grpService.tabg ; 

   if ( this.grpService.g1 ) {

     this.liste= this.grpService.liste1;

  }
    else{
     this.liste= this.grpService.liste2;
  }

   //this.liste= this.grpService.listee ; 


   }


}
