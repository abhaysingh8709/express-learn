
const express = require('express');
const app = express();
const dbConnection = require('../mongodb/mongodb');
const {ObjectId} = require("mongodb");


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

app.put('/editUser/:id', async (req,resp)=>{
    const db = await dbConnection();
    var id = req.params.id;

    const result = db.updateOne({_id:new ObjectId(id)},{$set:req.body});

    if(result.acknowledged){
        console.log("Record Updated");
    }else{
        console.log(id);
    }
    var mysort = { _id: -1 };
    data = await db.find().sort(mysort).toArray();

    resp.send(data);
});


app.delete('/deleteUser/:id', async (req,resp)=>{
    const db = await dbConnection();
    var id = req.params.id;

    const result = db.deleteOne({_id:new ObjectId(id)});

    if(result.acknowledged){
        console.log("Record Deleted");
    }else{
        console.log(id);
    }
    var mysort = { _id: -1 };
    data = await db.find().sort(mysort).toArray();

    resp.send(data);
});


app.listen(4500);