const express = require('express');
const db = require('../db');
const router = express.Router();
router.get('/', async(req,res,next) => {
 try{
     let results = await db.all();
     res.json=resluts;
   }catch(e){
       console.log(e);
       res.sendStatus(500);
   }
});

router.get('/:id','/:grp', async(req,res,next) => {
    try{
        let results = await db.one(req.params.id,req.params.grp);
        res.json=resluts;
      }catch(e){
          console.log(e);
          res.sendStatus(500);
      }
   });
module.exports=router;