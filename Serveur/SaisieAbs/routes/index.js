const express=require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const db=require('../db')
const router=express.Router()
router.use(cors());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));
class etud{
    id
    Nom
    Prenom
    Abs
}
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