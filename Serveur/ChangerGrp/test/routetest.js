const chai=require('chai')
const chaiHttp = require('chai-http');
const server =require('../server')
var expect = require('chai').expect;
chai.use(chaiHttp);
describe('ChangerGrp  route', () => {
    
    const Changergrp= '/api/tp/groupe';
    before("On test tout d'abord le serveur",async () => {
      const result = await chai
        .request('http://localhost:3000')
    });
   
      describe('changer le groupe de letudiant ', () => {
        it('', async () => {
          try {
            const result = await chai
            .request('http://localhost:3000')
              .post(Changergrp)
              .send({ id:"17/0047", grp:04 })
              
               expect(result).to.have.status(200);
              
               
          } catch (error) {
            console.log(error);
          }
        });
    
      });
     
    });

    