# TP_IGL
  Le projet est une application web de scolarité dedié aux étudiants,enseignants et agents d'administration(Enseignant,Agent d'administration dans notre cas) pour les permettre de :

  => Changer le groupe d'un étudinant(Fonctionnalité 1)

  => Saisir les Absence d'un groupe des étudinants (Fonctionnalité 2)


## Les Techenologie utilisée:

### Pour le BackEnd:

- Nodejs 6.12.0

    - Express pour la connexion avec le frontend

- mysql pour la gestion de la base de donné

- mocha et chai : pour les tests unitaires

### Pour le FrontEnd:
- Angular CLI: 8.3.21

- Bootstrap 4

- HTML5/SCSS

- jasmine : pour les tests unitaires

- Selinium pour les tests automatisés

### Pour la documentation : 

- JSDOC

### Pour le deployement :

- Docker

## Les installations nécessaires :

  Toutes les technologie cités  doivent étre installer en visitant ses sites officiels

  Créer un repertoire Projet oú vous placez ce projet

  Initialiser les deux repertoires Serveur et Client on saisissant cette commande

   ```
    npm init
   ```


- Pour le repertoire Serveur:
  pour chaque sous repertoire :
    Installer les dépendances dont vous aurez besoin 
    ```
    npm install body-parser express express-list-endpoints mysql officegen --save
    ```
 - Pour le reperoire Client :
   Installer les dépendances dont vous aurez besoin 
    ```
    ng new Client
    ng add @angular/material
    ng add @angular/cdk
    ```
    Installer Bootstrap 
     ```
   npm install bootstrap --save
    ```
    Installer la librairie de notification TOASTR.
     ```
   npm install ngx-toastr --save
    ```
     Installer angular confirmation
     ```
     npm install --save angular-confirmation-popover
    ```
    
## Lancer l'application :

   Lanncer tous d'abords le serveur de la base de donné et puis éxecuter dans /Serveur l'instruction
    ```
     npm run dev
    ```
   
   Pour lancer le projet éxecuter dans le repertoire Client : 
    ```
     ng server -o
    ```

## Executer les tests :

 ### Les tests unitaires :
 
   - Backend :
 
     Executer dans le repertoire test/Serveur/ChangerGrp ou  test/Serveur/SaisieAbs 

     ```
      mocha 
     ```
   - Frontend :
   
     ```
     ng test 
    ```
 ### Les tests automatisés : 

  Executer dans le repertoire Client
   ```
   ng e2e 
   ```
### la documentation:
 - Backend :
 jsdoc 
 pour ce qui est de l'instalation on a installé globalement en exécutant la commande 
 ```
 npm install -g jsdoc
 ````
 et pour générer la documentation en ligne 
 on éxécute la commande jsdoc chemin de notre fichier.js
## Contributeurs :

  Djecta Hibat_Errahmen
  
  Sadaoui Dyhia
  
  Bouabba Saloua
  

