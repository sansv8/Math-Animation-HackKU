const express = require('express');
const ejs = require('ejs');
const app = express();

const React = require('react')
const ReactDOM = require('react-dom')
const path = require('path')

const { MongoClient } = require("mongodb");
const ObjectId = require("mongodb").ObjectId;
const url = "mongodb+srv://math_animation:bzSsxbPMCntsYMSl@cluster0.2ielq.mongodb.net/Cluster0?retryWrites=true&w=majority";
const dbName = "Cluster0";
const client = new MongoClient(url);

app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs");

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


app.listen(3000, () => {
	client.connect(err => {
		console.log('Mongo connected lmao');
	})
  console.log('server started');
});
