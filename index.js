const express = require('express');
const ejs = require('ejs');
const app = express();
const bodyParser = require('body-parser');

const React = require('react')
const ReactDOM = require('react-dom')
const path = require('path')

const result = require('dotenv').config();


const { MongoClient } = require("mongodb");
const ObjectId = require("mongodb").ObjectId;
const { request } = require('http');
const USERNAME = process.env.ENV_MONGODB_USERNAME;
const PASSWORD = process.env.ENV_MONGODB_PASSWORD;
const url = "mongodb+srv://"+USERNAME+":"+PASSWORD+"@cluster0.2ielq.mongodb.net/Cluster0?retryWrites=true&w=majority";
const dbName = "Cluster0";
const client = new MongoClient(url,{ useUnifiedTopology: true });

app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.sendFile('/public/html/index.html', {root: __dirname })
});

app.get('/student', (req,res) => {
    res.sendFile("/public/html/student.html", {root: __dirname });		
});


app.get('/teacher', (req,res) => {
  res.sendFile("/public/html/teacher.html", {root: __dirname});
});

app.get('/problem/:id', (req,res) => {
	console.log(req.params.id);
	const ids = client.db(dbName).collection("problems") // substitute your database and collection names
	const result = ids.find({"_id" : ObjectId(req.params.id)}).toArray(function(err,result){
		console.log(result)
		res.render("problem",result[0])
	});
});

app.get('/getproblems', (req,res) => {
	const ids = client.db(dbName).collection("problems") // substitute your database and collection names;
	ids.find({}).toArray(function(err, result) {
	console.log("find query executed...")    
	console.log(result)
	res.json(result)
	});
});

app.get('/getid', (req,res) => {
    const ids = client.db(dbName).collection("problems") // substitute your database and collection names;
	const result = ids.find({"_id" : ObjectId(req.params.id)})
	res.json(result)
	});

app.post('/teacher', (req,res) => {
	const col = client.db(dbName).collection("problems");
	let problemDocument = {
		"variable": req.body.variable,
		"operation": {"val1": req.body.value1, "val2": req.body.value2, "operator": req.body.operator},
		"date": req.body.date
	}
	col.insertOne(problemDocument);
	res.redirect('/teacher')
});

app.delete('/teacher/:date', (req, res) => {
	let date = req.params.date;
	let col = client.db(dbName).collection("problems");
	date = date.replaceAll("A", "/");
	date = date.replaceAll("B", ":");
	date = date.replaceAll("C", " ");
	col.deleteOne({"date":date});
	res.sendStatus(204);
})

app.post('/teacher/update', (req,res) => {
	
	const col = client.db(dbName).collection("problems");
	col.updateOne(
		{"date": req.body.date},
		{ $set: {
			"variable": req.body.variable,
			"operation": {"val1": req.body.value1, "val2": req.body.value2, "operator": req.body.operator}}
		}
	).then((obj) => {
		res.redirect("/teacher");
	})
})


app.listen(process.env.PORT||3000, () => {
	client.connect(err => {
		console.log('Mongo connected lmao');
	})
  console.log('server started');
});
