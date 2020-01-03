import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from '../app/app.component';
import { grpService } from '../app/Services/grp.service' ; 
import { HttpClient, HttpHandler } from '@angular/common/http';

describe(' INTERFACE FRONTEND ', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [grpService, HttpClient, HttpHandler],
      imports: [
        RouterTestingModule, 
      ],
      declarations: [
        AppComponent,
      ],
    }).compileComponents();
  }));
  it(' devrait etre crée ', async(() => {
    
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
