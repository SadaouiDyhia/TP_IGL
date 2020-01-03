const express=require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const db=require('../db')
/**
 * @namespace routes 
 */
/**
 * @module router
 */
const router=express.Router()
router.use(cors());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));
/** 
*@classdesc la classe etud qui contient les propriétes suivant 
*@property {number } id
*@property  {string} Nom 
*@property  {string} Prenom 
*@property {number} Abs 
*/
class etud{
    id
    Nom
    Prenom
    Abs
}
/** 
* @function
 * @name get/one
 * @memberof routes
 * @param {string} one 
 
*/
router.get('/one',async(req,res,next)=>
{
    
    try
    {
        e1=new etud();
        var e=[e1]
        let resultas= await db.all()
        let resultas1= await db.one3()
        e.splice(0,1)
        for(i=0;i<resultas;i++)
        {
            e.splice(i,0,new etud())
            e[i].id=resultas1[i].id
            let res2=await db.one1(resultas1[i].id_user)
            e[i].Nom=res2[0].Nom
            e[i].Prenom=res2[0].Prenom
            let res1=await db.one2(resultas1[i].id)
            e[i].Abs=res1
            
        }
        res.json(e)
    }
    catch(e)
    {
        console.log(e)
        res.sendStatus(500);
    }
})
/** 
* @function
 * @name get/two
 * @memberof routes
 * @param {string} two
 
*/
router.get('/two',async(req,res,next)=>
{
    
    try
    {
        e1=new etud();
        var e=[e1]
        let resultas= await db.all1()
        let resultas1= await db.one32()
        e.splice(0,1)
        for(i=0;i<resultas;i++)
        {
            e.splice(i,0,new etud())
            e[i].id=resultas1[i].id
            let res2=await db.one1(resultas1[i].id_user)
            e[i].Nom=res2[0].Nom
            e[i].Prenom=res2[0].Prenom
            let res1=await db.one2(resultas1[i].id)
            e[i].Abs=res1
            
        }
        res.json(e)
    }
    catch(e)
    {
        console.log(e)
        res.sendStatus(500);
    }
})
/** 
* @function
 * @name post/Absence
 * @memberof routes
 * @param {string} Absence 
 
*/
router.post('/Absence',async(req,res,next)=>
{
    try
    {
        let resulta= await db.one(req.body)
        res.json(resulta)
    }
    catch(e)
    {
        console.log(e);
        res.sendStatus(500);
    }
})
module.exports=router