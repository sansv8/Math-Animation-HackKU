//math_animation
//bzSsxbPMCntsYMSl
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://math_animation:bzSsxbPMCntsYMSl@cluster0.2ielq.mongodb.net/Cluster0?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("Cluster0").collection("problems");
  // perform actions on the collection object
  client.close();
});
//Replace <password> with the password for the math_animation user. Replace myFirstDatabase with the name of the database that connections will use by default. Ensure any option params are URL encoded.