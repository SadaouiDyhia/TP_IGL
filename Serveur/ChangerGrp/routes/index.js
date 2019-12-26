const express=require('express');
var bodyParser = require('body-parser');
const db=require('../db')
const router=express.Router()
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));
router.post('/changer',async(req,res,next)=>
{
    try
    {
        console.log(req.body)
        let resulta=await db.one(req.body)
        res.json(resulta)
    }
    catch(e)
    {
        console.log(e)
        res.sendStatus(500);
    }
})
module.exports=router