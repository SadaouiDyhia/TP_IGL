import { browser, by, element } from 'protractor';

export class AppPage {

  getBtnchangerGroupe() {
    
    return (element(by.linkText('Changer de groupe')))[0] ;
  }
  

}
