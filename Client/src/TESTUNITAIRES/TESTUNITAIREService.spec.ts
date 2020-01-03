import { TestBed } from '@angular/core/testing';
import { grpService } from '../app/Services/grp.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('LE SERVICE ', () => {
  let usersService: grpService; 

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [grpService, HttpClient, HttpHandler]
    });

    usersService = TestBed.get(grpService); 
  });

  it('fonctionne correctement ', () => { 
    expect(usersService).toBeTruthy();
  });
});