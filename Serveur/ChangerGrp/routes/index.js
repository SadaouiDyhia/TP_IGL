const express=require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const db=require('../db')
const router=express.Router()
router.use(cors());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));
router.post('/changer',async(req,res,next)=>
{
    try
    {
        
        let resulta=await db.one(req.body)
        res.json(resulta)
    }
    catch(e)
    {
        res.sendStatus(500);
    }
})
module.exports=router