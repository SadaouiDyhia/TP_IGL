
const mysql=require('mysql')

const pool=mysql.createPool(
    {
        host:'localhost',
        user: 'root',
        password:'',
        database: 'tp',
        

    })
    
    var g1
    var g
    let tp={} 
    tp.one=(Etud)=>
    {
        
        return new Promise((resolve,reject)=>
        {  
            pool.query('SELECT Grp FROM etudiant WHERE id=?',[Etud.id] ,(err,resultas)=>
            {
                if(err)
              {
                  return reject(err)
              }
              g=resultas[0].Grp
            pool.query('UPDATE etudiant SET Grp=?  WHERE id=? ',[Etud.grp,Etud.id],(err,resultas)=>
            {
              
              if(err)
              {
                  return reject(err)
              }
             
              pool.query('SELECT Num FROM groupe WHERE NumGrp=? AND Niv="1cs" ',[Etud.grp],(err,resultas)=>
             {
                if(err)
              {
                  return reject(err)
              }
             
              g1=resultas[0].Num+1
            
              pool.query('UPDATE groupe SET Num=?  WHERE NumGrp=? AND Niv= "1cs" ' ,[g1,Etud.grp],(err,resultas)=>
            {
                if(err)
              {
                  return reject(err)
              }
              return resolve(resultas[0])
              
            })
            pool.query('SELECT Num FROM groupe WHERE NumGrp=? AND Niv="1cs" ',[g],(err,resultas)=>
             {
                if(err)
              {
                  return reject(err)
              }
              g1=resultas[0].Num-1
              pool.query('UPDATE groupe SET Num=?  WHERE NumGrp=? AND Niv= "1cs" ' ,[g1,g],(err,resultas)=>
            {
                if(err)
              {
                return reject(err)
              }
            })
            })
            })
            })
          })
    })
}
module.exports=tp