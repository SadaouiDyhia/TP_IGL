import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { AuthComponent } from './auth/auth.component';
import { AllViewComponent } from './all-view/all-view.component';
import { Routes } from '@angular/router';
import {RouterModule} from '@angular/router';


import { grpService } from './Services/grp.service';

const appRoutes: Routes = [
  { path: 'one', component: AllViewComponent },
  { path: 'two', component: AuthComponent },
  { path: '', component: AllViewComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EtudiantComponent,
    AuthComponent,
    AllViewComponent,
    

  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [ 
   grpService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
