const express=require('express');
var bodyParser = require('body-parser');
const db=require('../db')
const router=express.Router()
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));
router.get('/',async(req,res,next)=>
{
    
    try
    {
        
        let resultas=await db.all()
        res.json(resultas)
    }
    catch(e)
    {
        console.log(e)
        res.sendStatus(500);
    }
})
router.post('/Absence',async(req,res,next)=>
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