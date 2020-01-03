const express=require('express');
var bodyParser = require('body-parser');
const db=require('../db')
var cors = require('cors');
/**
 * @namespace routes 
 */
/**
 * @module router
 */
router.use(cors());
const router=express.Router()
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));
/** 
* @function
 * @name post/changer
 * @memberof routes
 * @param {string} changer 
 
*/
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
