const dbConnection = require('../mongodb/mongodb');

const update = async () => {
    const db = await dbConnection();
    const result = await db.updateOne(
            {
                name:"Rajesh Singh"
            },
            {
                $set:{
                        name:"Rajesh Singh Sir",
                        email:"rajesh@pitangent.com"
                }
            }
        );
}

update();