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
        var m
        var e=new Array
        return new Promise((resolve,reject)=>
        {
            pool.query('SELECT COUNT(*) AS m FROM etudiant WHERE Niv = "1cs" AND (Grp=1) ',(err,resultas)=>
            {
                m=resultas[0].m 
              if(err)
              {
                  return reject(err)
              }
            return resolve(m)
             })})
        
    }
    tp.all1=()=>
    {
        var m
        var e=new Array
        return new Promise((resolve,reject)=>
        {
            pool.query('SELECT COUNT(*) AS m FROM etudiant WHERE Niv = "1cs" AND (Grp=2) ',(err,resultas)=>
            {
                m=resultas[0].m 
              if(err)
              {
                  return reject(err)
              }
            return resolve(m)
             })})
        
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
              id1=resultas[0].id
              pool.query('SELECT Absence FROM absence WHERE id_Etud=? AND id_Mod=? ',[M.id,id1],(err,resultas)=>
             {
                if(err)
              {
                  return reject(err)
              }
              M.abs= +M.abs + +(resultas[0].Absence)
              pool.query("UPDATE absence SET Absence=?  WHERE id_Etud=? AND id_Mod=?" ,[M.abs,M.id,id1],(err,resultas)=>
            {
                if(err)
              {
                  return reject(err)
              }
              return resolve(resultas[0])
              
            })
            if(M.abs>=3)
            {
                pool.query("UPDATE etudiant SET Abs=1  WHERE id=? " ,[M.id],(err,resultas)=>
            {
                if(err)
              {
                  return reject(err)
              }
              return resolve(resultas[0])
              
            })
            }
            else
            {
                pool.query("UPDATE etudiant SET Abs=0  WHERE id=? " ,[M.id],(err,resultas)=>
            {
                if(err)
              {
                  return reject(err)
              }
              return resolve(resultas[0])
              
            })
            }

            })
            })
        }) 
    }
    tp.one32=()=>
    {
        return new Promise((resolve,reject)=>
        {
            pool.query('SELECT id,id_user FROM etudiant WHERE Niv = "1cs" AND (Grp=2) ',(err,resultas)=>
            {
              if(err)
              {
                  return reject(err)
              }
            return resolve(resultas)
             })})
        
    }
    tp.one3=()=>
    {
        return new Promise((resolve,reject)=>
        {
            pool.query('SELECT id,id_user FROM etudiant WHERE Niv = "1cs" AND (Grp=1) ',(err,resultas)=>
            {
              if(err)
              {
                  return reject(err)
              }
            return resolve(resultas)
             })})
        
    }
    tp.one1=(i)=>
    {
        return new Promise((resolve,reject)=>
        {
            pool.query('SELECT Nom,Prenom FROM user WHERE id=? ',[i],(err,resultas)=>
            {
              if(err)
              {
                  return reject(err)
              }
            return resolve(resultas)
             })})
        
    }
    tp.one2=(i)=>
    {
        return new Promise((resolve,reject)=>
        {
            pool.query('SELECT Absence FROM absence WHERE id_Etud=? AND id_Mod=1 ',[i],(err,resultas)=>
            {
              if(err)
              {
                  return reject(err)
              }
              
            return resolve(resultas[0].Absence)
             })})
        
    }
    module.exports=tp