const mysql=require('mysql')
const pool=mysql.createPool(
    {
        host:'localhost',
        user: 'root',
        password:'',
        database: 'tp',
        

    })
    let tp={}
    tp.all=()=>
    {
        return new Promise((resolve,reject)=>
        {
            pool.query('SELECT * FROM etudiant WHERE Niv = "1cs" AND (Grp=1 OR Grp=2) ',(err,resultas)=>
            {
              if(err)
              {
                  return reject(err)
              }
              
              return resolve(resultas)
            })
        })
    }
 tp.one=(M)=>
    {
        return new Promise((resolve,reject)=>
        {
            pool.query('SELECT id FROM module WHERE Nom="IGL" ',(err,resultas)=>
            {
              if(err)
              {
                  return reject(err)
              }
              console.log("dsfghjbkn",M.id);
              console.log(M.id);
              id1=resultas[0].id
              //return resolve(resultas[0])
              pool.query('SELECT Absence FROM absence WHERE id_Etud=? AND id_Mod=? ',[M.id,id1],(err,resultas)=>
             {
                if(err)
              {
                  console.log("dusyhgbfwy")
                  return reject(err)
              }
              M.Abs= +M.Abs + +(resultas[0].Absence)
             // return resolve(resultas[0].Absence)
              pool.query("UPDATE absence SET Absence=?  WHERE id_Etud=? AND id_Mod=?" ,[M.Abs,M.id,id1],(err,resultas)=>
            {
                if(err)
              {
                  return reject(err)
              }
              return resolve(resultas[0])
              
            })

            })
            })
        }) 
    }

    module.exports=tp