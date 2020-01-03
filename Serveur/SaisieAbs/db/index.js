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
     * 
      @module tp 
     
     */
    let tp={}
    /**
     * @property {Function} tp.all
     * la fonction qui recupère les etudiant de groupe 1 niveau 1cs 
     *  @returns {Promise}  that resolves after the specified delay 
     */
    tp.all=()=>
    {
        /**
         * le nombre d'étudiants du groupe 1 
         * @type {number }
         */
        var m
      
        return new Promise((resolve,reject)=>
        { /** 
            * la description de la  fonction qui se charge de la requete à la base de donéé 
            * @property {Function} query
            * @param {sqlQuery} 
            * @returns {resolve}
           */
          /**
           * la focntion (err,resultas)
           * @property {Function}
           * @param {any} err
           * @param {any} resultas
           * @returns {reject}
           */
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
     /**
     * @property {Function} tp.all1
     * la fonction qui recupère les etudiant de groupe 2 niveau 1cs 
     *  @returns {Promise}  that resolves after the specified delay 
     */

    tp.all1=()=>
    {
        /**
         * le nombre d'étudiants  du groupe 2
         */
        var m
        
        return new Promise((resolve,reject)=>
        { /** 
            * la description de la  fonction qui se charge de la requete à la base de donéé 
            * @property {Function} query
            * @param {sqlQuery} 
            * @returns {resolve}
           */
          /**
           * la focntion (err,resultas)
           * @property {Function}
           * @param {any} err
           * @param {any} resultas
           * @returns {reject}
           */
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
     /**
     * @property {Function} tp.one
     * la fonction qui permet de saisir l'absence 
     * @param {any} M - enregistrement qui contient l'identifiant du l'etudiant et le nombre d 'absence d'un étudiant 
     * @returns {Promise}  that resolves after the specified delay 
     */
 tp.one=(M)=>
    {
        return new Promise((resolve,reject)=>
        {/** 
            * la description de la  fonction qui se charge de la requete à la base de donéé 
            * @property {Function} query
            * @param {sqlQuery} 
            
           */
          /**
           * la focntion (err,resultas)
           * @property {Function}
           * @param {any} err
           * @param {any} resultas
           * @returns {reject}
           */
            pool.query('SELECT id FROM module WHERE Nom="IGL" ',(err,resultas)=>
            {
              if(err)
              {
                  return reject(err)
              }
              /**
               * l'id du module 
               * @type {number }
               */
              id1=resultas[0].id
              /** 
            * la description de la  fonction qui se charge de la requete à la base de donéé 
            * @property {Function} query
            * @param {sqlQuery}
            * @returns {string} 
            
           */
          /**
           * la focntion (err,resultas)
           * @property {Function}
           * @param {any} err
           * @param {any} resultas
           * @returns {reject}
           */
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
             // return resolve(resultas[0])
              
            })
            if(M.abs>=3)
            {/** 
            * la description de la  fonction qui se charge de la requete à la base de donéé 
            * @property {Function} query
            * @param {sqlQuery} 
            * @returns {resolve}
           */
          /**
           * la focntion (err,resultas)
           * @property {Function}
           * @param {any} err
           * @param {any} resultas
           * @returns {reject}
           */
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
            {/** 
            * la description de la  fonction qui se charge de la requete à la base de donéé 
            * @property {Function} query
            * @param {sqlQuery} 
            * @returns {resolve}
           */
          /**
           * la focntion (err,resultas)
           * @property {Function}
           * @param {any} err
           * @param {any} resultas
           * @returns {reject}
           */
                pool.query("UPDATE etudiant SET Abs=0  WHERE id=? " ,[M.id],(err,resultas)=>
            {
                if(err)
              {
                  return reject(err)
              }
             
              return resolve(resultas[0])
            })
            }
           return "Absence bien saisie"
            })
            })
        }) 
    }
     /**
     * @property {Function} tp.one32
     * la fonction qui recupère les  id et id-user des etudiant de groupe 2 niveau 1cs 
     *  @returns {Promise}  that resolves after the specified delay 
     */
    tp.one32=()=>
    {
        return new Promise((resolve,reject)=>
        {/** 
            * la description de la  fonction qui se charge de la requete à la base de donéé 
            * @property {Function} query
            * @param {sqlQuery} 
            * @returns {resolve}
           */
          /**
           * la focntion (err,resultas)
           * @property {Function}
           * @param {any} err
           * @param {any} resultas
           * @returns {reject}
           */
            pool.query('SELECT id,id_user FROM etudiant WHERE Niv = "1cs" AND (Grp=2) ',(err,resultas)=>
            {
              if(err)
              {
                  return reject(err)
              }
            return resolve(resultas)
             })})
        
    }
     /**
     * @property {Function} tp.one3
     * la fonction qui recupère les  id et id-user des etudiant de groupe 2 niveau 1cs 
     *  @returns {Promise}  that resolves after the specified delay 
     */
    tp.one3=()=>
    {
        return new Promise((resolve,reject)=>
        {/** 
            * la description de la  fonction qui se charge de la requete à la base de donéé 
            * @property {Function} query
            * @param {sqlQuery} 
            * @returns {resolve}
           */
          /**
           * la focntion (err,resultas)
           * @property {Function}
           * @param {any} err
           * @param {any} resultas
           * @returns {reject}
           */
            pool.query('SELECT id,id_user FROM etudiant WHERE Niv = "1cs" AND (Grp=1) ',(err,resultas)=>
            {
              if(err)
              {
                  return reject(err)
              }
            return resolve(resultas)
             })})
        
    }
      /**
     * @property {Function} tp.one1
     * la fonction qui recupère le nom et prenom des etudiant 
     * @param {number } i - l'id de l'etudiant 
     *  @returns {Promise}  that resolves after the specified delay 
     */
    tp.one1=(i)=>
    {
        return new Promise((resolve,reject)=>
        {/** 
            * la description de la  fonction qui  se charge de la requete à la base de donéé 
            * @property {Function} query
            * @param {sqlQuery} 
            * @returns {resolve}
           */
          /**
           * la focntion (err,resultas)
           * @property {Function}
           * @param {any} err
           * @param {any} resultas
           * @returns {reject}
           */
            pool.query('SELECT Nom,Prenom FROM user WHERE id=? ',[i],(err,resultas)=>
            {
              if(err)
              {
                  return reject(err)
              }
            return resolve(resultas)
             })})
        
    }
     /**
     * @property {Function} tp.one2
     * la fonction qui recupère les absences des etudiants 
     * @param {number } i - l'id de l'etudiant 
     *  @returns {Promise}  that resolves after the specified delay 
     */
    tp.one2=(i)=>
    {
        return new Promise((resolve,reject)=>
        {/** 
            * la description de la  fonction qui se charge de la requete à la base de donéé 
            * @property {Function} query
            * @param {sqlQuery} 
            * @returns {resolve}
           */
          /**
           * la focntion (err,resultas)
           * @property {Function}
           * @param {any} err
           * @param {any} resultas
           * @returns {reject}
           */
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
