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

   ngOnInit() {

   this.tab = this.grpService.tabg ; 
   this.liste= this.grpService.listee ; 
   }


}
