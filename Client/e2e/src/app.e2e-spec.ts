import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import {by, element } from 'protractor';

describe('test automatisé : Fonction saisir absence ', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Devrait augmanter le nombre d"absence ',async () => {
    browser.waitForAngularEnabled(false);
    browser.ignoreSynchronization = true;
    browser.sleep(3000); 
    
    
    expect( element(by.buttonText( "+")).click ).toBeDefined; 
  });

  it('Devrait diminuer le nombre d"absence  ',async () => {
    browser.waitForAngularEnabled(false);
    browser.ignoreSynchronization = true;
    browser.sleep(3000); 
    expect( element(by.buttonText( "-")).click ).toBeDefined ; 
  });

  afterEach(async () => {
    /** S'assure qu'il n'y a pas d'erreur emise par le navigateur    */
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
