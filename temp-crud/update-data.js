const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                     
require('dotenv').config();
const url = "mongodb+srv://"+process.env.MONGODB_USERNAME+":"+process.env.MONGODB_PASSWORD+"@cluster0.2ielq.mongodb.net/Cluster0?retryWrites=true&w=majority";
const client = new MongoClient(url);
 
 // The database to use
 const dbName = "Cluster0";
                      
 async function run() {
    try {
         await client.connect();
         console.log("Connected correctly to server");
         const db = client.db(dbName);
         // Use the collection "problems"
         const col = db.collection("problems");

         // Update a single document, wait for promise so we can read it back
         const p = await col.updateOne(
					   { "variable": "apple(s)" },
					   {
					     $set: { "operation.val1": 6, "variable": "pineapple(s)" }
					   }
					)
			
         /*// Find one document
         const myDoc = await col.findOne();
         // Print to the console
         console.log(myDoc);*/
        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}
run().catch(console.dir);