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
   m:number;
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

  // this.tab = this.grpService.tabg ; 

   if ( this.grpService.g1 ) {

    this.grpService.getEtudiants1().subscribe((data)=>{
      this.liste=data
    }); // listServer1
    
  }
    else{
      this.grpService.getEtudiants2().subscribe((data)=>{
        this.liste=data})
    }}}
