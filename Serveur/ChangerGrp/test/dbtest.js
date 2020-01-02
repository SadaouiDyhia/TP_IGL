const chai=require('chai-as-promised')
const chai1=require('chai')

const db =require('../db/index')

    describe('changer le groupe pour letudiant', () => {
        it("Mettre a jour le groupe de l'étudiant",async () => {
          try{
            Etudiant={id:"17/0047", grp :1}
       
           db.one(Etudiant).then((function(result){ 
               chai1.assert.isNotEmpty( result)
               chai.equal(result,"le groupe a bien été changée ")
            }))
           }
           catch(e)
           {
              console.log("")
           }
      
            
        })
        

        
    })
