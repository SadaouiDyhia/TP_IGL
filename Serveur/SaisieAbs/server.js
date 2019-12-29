const express=require('express');
const apiRouter=require('./routes')
const apiRouter1=require('../ChangerGrp/routes')
const app=express()
app.use(express.json())
app.use('/api/tp',apiRouter);
app.use('/api/tp',apiRouter1);
app.listen(process.env.PORT ||'3000',()=>{
    console.log('server is running en port:  ${process.env.PORT || 3000}')

})