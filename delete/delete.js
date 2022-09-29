const { resolveInclude } = require('ejs');
const dbConnection = require('../mongodb/mongodb');

const deleteData = async () => {
    const db = await dbConnection();
    const result = await db.deleteOne({name:"Rajesh Singh Sir"});

    if(result.acknowledged){
        console.log("Record Deleted");
    }
}

deleteData();