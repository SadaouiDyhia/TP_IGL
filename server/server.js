const express = require('express');
const apirouter =require('./routes');
const app = express();
app.use(express.json());
app.use('/api/chirps',apirouter);
app.listen(process.env.PORT || '3000',() => {
    const port=process.env.PORT || '3000';
    console.log('server is runnig on port'+ port);
} );