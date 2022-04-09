const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://math_animation:bzSsxbPMCntsYMSl@cluster0.2ielq.mongodb.net/Cluster0?retryWrites=true&w=majority";
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
         // Construct a document                                                                                                                                                              
         let problemDocument = {
             "variable": "apple(s)",
					 	 "operation": { "val1": 5, "val2": 7, "operator": "+" }

         }
         // Insert a single document, wait for promise so we can read it back
         const p = await col.insertOne(problemDocument);
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