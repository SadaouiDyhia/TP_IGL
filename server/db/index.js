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
        pool.query('SELECT * FROM tp ',(err,results) => {
            if (err){
              return reject(err) ;
             }
            return resolve(results);
        });
    });
};
//recuperer l'id_user et le groupe de l'etudiant 
tpdb.one =(mat) => {
    return new Promise((resolve, reject) =>{
         pool.query('SELECT id_User FROM etudiant WHERE id =? ',[mat],(err,results) => {
             if (err){
               return reject(err) ;
              }
             return resolve(results[0]);
         });
     });
 };
 

module.exports=tpdb;