const express = require('express');

const app = express();

const React = require('react')
const ReactDOM = require('react-dom')

const { MongoClient } = require("mongodb");
const url = "mongodb+srv://math_animation:bzSsxbPMCntsYMSl@cluster0.2ielq.mongodb.net/Cluster0?retryWrites=true&w=majority";


app.get('/', (req, res) => {
  res.sendFile('index.html', {root: __dirname })
});

app.get('/student', (req,res) => {
  //res.sendFile("/views/student.html", {root: __dirname });
	res.send('Student portal')
	const client = new MongoClient(url);
	// The database to use
 	const dbName = "Cluster0";

	client.connect(err => {
    console.log("Connected to MongoDB server...");
	const ids = client.db(dbName).collection("problems") // substitute your database and collection names;
		//temp = ""
	ids.find({}).toArray(function(err, result) {
        console.log("find query executed...")    
        console.log(result)
				//temp=result
	});
		//res.send(result)
});

	
});

app.get('/teacher', (req,res) => {
  res.sendFile('views/teacher.html', {root: __dirname });
 
});

app.post('/getproblems', (req,res) => {
  
});

app.listen(3000, () => {
  console.log('server started');
});

