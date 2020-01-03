import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import {by, element } from 'protractor';

describe('test automatisé : Fonction changer de groupe ', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Devrait me permettre de saisir la nouvelle valeur du groupe  ',async () => {
    browser.waitForAngularEnabled(false);
    browser.ignoreSynchronization = true;
    browser.sleep(3000); 

    let input = element.all( by.css('.here')) ; 
    input.get(0).sendKeys('Success')
    expect( input.get(0).getAttribute('value')).toBe('Success');
  });

  it('Devrait me permettre de changer le groupe    ',async () => {
    browser.waitForAngularEnabled(false);
    browser.ignoreSynchronization = true;
    browser.sleep(3000); 
    expect( element(by.buttonText( "Changer groupe ")).click ).toBeDefined; 
  });



  afterEach(async () => {
    /** S'assure qu'il n'y a pas d'erreur emise par le navigateur    */
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
