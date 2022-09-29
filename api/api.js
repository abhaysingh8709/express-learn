
const express = require('express');
const app = express();
const dbConnection = require('../mongodb/mongodb');

app.use(express.json());

app.get('/getUser', async (req,resp)=>{
    let data = await dbConnection();
    data = await data.find().toArray();
    resp.send((data));
});


app.post('/addUser', async (req,resp)=>{
    const db = await dbConnection();
    const result = db.insertOne(req.body);

    var mysort = { _id: -1 };
    data = await db.find().sort(mysort).toArray();

    resp.send((data));
});

app.put('/editUser', async (req,resp)=>{
    const db = await dbConnection();
    const result = db.insertOne(req.body);

    var mysort = { _id: -1 };
    data = await db.find().sort(mysort).toArray();

    resp.send((data));
});


app.listen(4500);