/**
 * Ce fichier est nécessaire pour karma.conf.js etb poiur recursovement charger les fichiers .spec et les fichiers des frameworks
 * 
 */
import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const require: any;

/**
 *   1- Initialisation de l'environnement de test
 */
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
/** 
 *  2- Trouver tous les tests.
 * */

const context = require.context('./', true, /\.spec\.ts$/);
/** 
 *  3-Cherger tous les modules
 * */
context.keys().map(context);
