const {MongoClient} = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

async function dbConnection()
{
    let result = await client.connect();
    let db = result.db('node-db');
    return db.collection('users');
}

module.exports = dbConnection;

// dbConnection().then((resp)=>{
//     resp.find().toArray().then((data)=>{
//         console.warn(data);
//     });
// });

// const main = async ()=>{
//     let data = await dbConnection();
//     data = await data.find().toArray();
//     console.warn(data);
// }

// main();