import { grpService } from "../app/Services/grp.service"; 
import { of } from 'rxjs'
import {Etudiant} from '../models/Etudiant.model'


let httpClientSpy: { get: jasmine.Spy };

let service: grpService;

describe('SERVICE TEST DE LA CONNEXION HTTP AVEC LE BACKEND : ', () => {
  beforeEach(() => { 

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    service = new grpService(<any> httpClientSpy);
  });

  it('Doit retourner la liste des etudiants du groupe 1 ', () => {

    const liste1 : Etudiant[] = [
      new Etudiant(),
      new Etudiant()
    ];

    httpClientSpy.get.and.returnValue(of <Etudiant[]> (liste1));
    expect( (service.getEtudiants1()).map.length ).toEqual( 2 , 'Memes elements');
    
  });
  

  
  it(' Doit retourner la liste des etudiants du groupe 2  ', () => {
    
    const liste1 : Etudiant[] = [
      new Etudiant(),
      new Etudiant()
    ];

    httpClientSpy.get.and.returnValue(of <Etudiant[]> (liste1));
    expect( (service.getEtudiants2()).map.length ).toEqual( 2 , 'Memes elements');
    
  });

  

   
});

