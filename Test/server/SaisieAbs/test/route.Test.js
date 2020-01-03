const chai=require('chai')
const chaiHttp = require('chai-http');
const server =require('../../../../Serveur/SaisieAbs/server')
var expect = require('chai').expect;
chai.use(chaiHttp);
describe('Saisie Absence route', () => {
    const groupe1 = '/api/tp/one';
    const groupe2 = '/api/tp/two';
    const Absence= '/api/tp/Absence';
    before("On test tt d'abord le serveur",async () => {
      const result = await chai
        .request('http://localhost:3000')
    });
    describe('Get les etudiants de groupe1', () => {
      it('', async () => {
        try {
          const result = await chai
            .request('http://localhost:3000')
            .get(groupe1)
            expect(result).to.have.status(200); 
        } catch (error) {
          console.log(error);
        }
      });
  
    });
  
 
  
    describe('Get les etudiants de groupe2', () => {
        it('', async () => {
          try {
            const result = await chai
            .request('http://localhost:3000')
              .get(groupe2)

                expect(result).to.have.status(200);
                
           
          } catch (error) {
            console.log(error);
          }
        });
    
      });
      describe('Saisie les absences des etudiants', () => {
        it('', async () => {
          try {
            const result = await chai
            .request('http://localhost:3000')
              .post(Absence)
              .send({ id:"17/0047", abs:1 })
              
               expect(result).to.have.status(200);
              
               
          } catch (error) {
            console.log(error);
          }
        });
    
      });
     
    });
