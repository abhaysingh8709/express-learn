const dbConnection = require('../mongodb/mongodb');

const insert = async () => {
    const db = await dbConnection();
    const result = db.insertOne(
            {
                name:"Rajesh Singh",
                email:"rajesh@pitanggent.com"
            }
        );
}

insert();