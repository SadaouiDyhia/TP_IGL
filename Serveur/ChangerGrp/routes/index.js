const express=require('express');
var bodyParser = require('body-parser');
const db=require('../db')
/**
 * @namespace routes 
 */
/**
 * @module router
 */
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