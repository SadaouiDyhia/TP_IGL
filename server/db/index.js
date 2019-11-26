const mysql=require('mysql');
const pool = mysql.createPool({
    connectionLimit:10,
    user: 'root',
    password :'',
    database: 'tp',
    host:'localhost',
    port:'3306'
});
var mat='17/0047'
let tpdb={};
// recuperer toutes les tables de la base de donnée 
tpdb.all =() => {
   return new Promise((resolve, reject) =>{
        pool.query('SELECT * FROM etudiant',(err,results) => {
            if (err){
              return reject(err) ;
             }
            return resolve(results);
        });
    });
};
//recuperer le groupe et le niveau de l'etudiant 
tpdb.one =(mat,grp) => {
    return new Promise((resolve, reject) =>{
         pool.query('SELECT Grp,Niv FROM etudiant WHERE id =? ',[mat],(err,results) => {
             if (err){
               return reject(err) ;
              } 
             niveau=results[0].Niv
             groupe=results[0].Grp

             // recuper le nombre d'etudiants dans un groupe   
             pool.query('SELECT Num FROM groupe WHERE Grp="groupe" And Niv=niveau',[mat],(err,results) => {
                if (err){
                  return reject(err) ;
                 }
             Num = (results[0].Num )+1
             // mise a jour du nombre d'étudiant du groupe de base (groupe actuel)
             pool.query('UPDATE groupe SET Num WHERE Niv=niveau  AND Numgrp=groupe  ',[mat],(err,results) => {
                if (err){
                  return reject(err) ;
                 }
              pool.query('SELECT Num FROM groupe WHERE Grp="grp" And Niv=niveau',[mat],(err,results) => {
                    if (err){
                      return reject(err) ;
                     }
                 Num = (results[0].Num )+1
            //mise a jour du nombre d'étudiant du nouveau groupe 
            pool.query('UPDATE groupe SET Num WHERE Niv=niveau  AND Numgrp=grp  ',[mat],(err,results) => {
                if (err){
                  return reject(err) ;
                 }
            // mise à jour du numéro du groupe de l'etudiant 
            pool.query('UPDATE etudiant SET grp WHERE Niv=niveau AND Grp=groupe  ',[mat],(err,results) => {
                if (err){
                  return reject(err) ;
                 }
             return resolve(results[0]);
         })
     })
    })
})
 })
    })
})
} 
module.exports=tpdb;