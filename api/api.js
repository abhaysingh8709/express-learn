
const express = require('express');
const app = express();

const dbConnection = require('../mongodb/mongodb');

app.get('/getUser', async (req,resp)=>{
    let data = await dbConnection();
    data = await data.find().toArray();
    resp.send((data));
});

app.listen(4500);