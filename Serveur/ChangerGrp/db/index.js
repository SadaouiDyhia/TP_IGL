/**
 *@typedef sqlQuery
*@description An object that encapsulates a SQL query and parameters
*@property {string} sql The SQL query to execute
*@property {sqlParameter[]} parameters An array of parameters to pass to the query
*/
/**
*@typedef sqlParameter
*@description Describes a parameter to be passed to a database along with a SQL query
*@property {string} name The name of the parameter
*@property {string} type An optional type name, either 'string', 'number', 'boolean' or 'date'
*@property {object} value The value of the parameter
*/

/**
 *le système de gestion de la base de donnée 
 * @type {any }
 
 */
const mysql=require('mysql')
/**
 * établir la connexion  avec la base de donnée 
 * @type {any}
 * @property {string} host  -le nom du host  de la base de donnée à laquelle on est connectée 
 * @property {string} user  - le nom de l'utlisateur de mysql avec lequel on s'autentifie 
 * @property {string} password -le mot de passe de user 
 * @property {database} database -le nom de la base de donnée utilisée pour cette connexion
 
 */
const pool=mysql.createPool(
    {
        host:'localhost',
        user: 'root',
        password:'',
        database: 'tp',
        

    })
    /**
     * le nombre d'étudiant dans un groupe 
     * @type {number}
     */
    var g1
    /**
     * le groupe actuel de l'étudiant  
     * @type {number}
     */
    var g
    /**
     * 
      @module tp 
     
     */
    let tp={}
    
    /**
     * la fonction qui se charge de changer le groupe de l'étudiant à travers des requetes à la base de donnée 
     * @property {Function} tp.one
     * @param {any} Etud -un enregistrement contenant le nouveau groupe de l'etudiant et son id 
     * @returns {Promise}  that resolves after the specified delay  
     */
    tp.one=(Etud)=>
    {
        
        return new Promise((resolve,reject)=>
        {  
            pool.query('SELECT Grp FROM etudiant WHERE id=?',[Etud.id] ,(err,resultas)=>
            {
                if(err)
              {
                  return reject(err)
              } /** 
            * la description de la  fonction qui se charge de la requete à la base de donéé 
            * @property {Function} query
            * @param {sqlQuery} 
           */
          /**
           * la focntion (err,resulats)
           * @property {Function}
           * @param {any} err
           * @param {any} resulats
           * @returns {reject}
           */
              
              g=resultas[0].Grp
               /** 
            * la description de la  fonction qui se charge de la requete à la base de donéé 
            * @property {Function} query
            * @param {sqlQuery} 
           */
          /**
           * la focntion (err,resulats)
           * @property {Function}
           * @param {any} err
           * @param {any} resulats
           * @returns {reject}
           */
            pool.query('UPDATE etudiant SET Grp=?  WHERE id=? ',[Etud.grp,Etud.id],(err,resultas)=>
            {
              
              if(err)
              {
                  return reject(err)
              }
              /** 
            * la description de la  fonction qui se charge de la requete à la base de donéé 
            * @property {Function} query
            * @param {sqlQuery} 
           */
          /**
           * la focntion (err,resulats)
           * @property {Function}
           * @param {any} err
           * @param {any} resulats
           * @returns {reject}
           */
                pool.query('SELECT Num FROM groupe WHERE NumGrp=? AND Niv="1cs" ',[Etud.grp],(err,resultas1)=>
             {
                if(err)
              {
                  return reject(err)
              }
             
              g1=resultas1[0].Num+1
             /** 
            * la description de la  fonction qui se charge de la requete à la base de donéé 
            * @property {Function} query
            * @param {sqlQuery} 
           */
          /**
           * la focntion (err,resulats)
           * @property {Function}
           * @param {any} err
           * @param {any} resulats
           * @returns {reject}
           */
               pool.query('UPDATE groupe SET Num=?  WHERE NumGrp=? AND Niv= "1cs" ' ,[g1,Etud.grp],(err,resultas2)=>
            {
                if(err)
              {
                  return reject(err)
              }
              
            })
             /** 
            * la description de la  fonction qui se charge de la requete à la base de donéé 
            * @property {Function} query
            * @param {sqlQuery} 
           */
          /**
           * la focntion (err,resulats)
           * @property {Function}
           * @param {any} err
           * @param {any} resulats
           * @returns {reject}
           */
           pool.query('SELECT Num FROM groupe WHERE NumGrp=? AND Niv="1cs" ',[g],(err,resultas3)=>
             {
                if(err)
              {
                  return reject(err)
              }
              g1=resultas3[0].Num-1
               /** 
            * la description de la  fonction qui se charge de la requete à la base de donéé 
            * @property {Function} query
            * @param {sqlQuery} 
           */
          /**
           * la focntion (err,resulats)
           * @property {Function}
           * @param {any} err
           * @param {any} resulats
           * @returns {reject}
           */
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
