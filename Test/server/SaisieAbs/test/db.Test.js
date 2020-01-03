const chai=require('chai-as-promised')
const chai1=require('chai')

const db =require('../../../../Serveur/SaisieAbs/db/index')
describe('Test de fonctionnemnt de la bdd', () => {
    describe('GET les etudiants de groupe 1 ou 2', () => {
         it("Get les info(nombre d'absence) d'un etudiant de groupe1 ou 2",async () => {
            
            db.one2("17/0047").then((function(result){ chai1.assert.isNotNull( result)}))
          
        })
        it("Get les info(nombre d'absence) des etudiants de groupe1 ou 2",async () => {
            

            db.one1(3).then((function(result){ chai1.assert.isNotNull( result)}))
     
        })
        it("Get les info(NOM,PRENOM) des etudiants de groupe1",async () => {
            
            db.one3().then((function(result){ chai1.assert.isNotNull( result)}))
          
        })
        it("Get les info des etudiants de groupe2",async () => {
            db.one32().then((function(result){ chai1.assert.isNotNull( result)}))
            
        })
        it("Get les id des etudiants de groupe1",async () => {
            db.all().then((function(result){ chai1.assert.isNotNull( result)}))
           
        })
        it("Get les id des etudiants de groupe2",async () => {
            db.all1().then((function(result){ chai1.assert.isNotNull( result)}))
            
        })
    })
    describe('Mettre a jour les absences', () => {
        it("Mettre a jour les absence d'un etudiant",async () => {
          try{
            Etudiant={id:"17/0047",Abs:1}
       
           db.one(Etudiant).then((function(result){ 
               chai1.assert.isNotEmpty( result)
               chai.equal(result,"Absence bien saisie")
            }))
           }
           catch(e)
           {
              console.log("")
           }
      
            
        })
   
        
    })
})
