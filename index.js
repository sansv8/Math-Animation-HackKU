const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const React = require('react')
const ReactDOM = require('react-dom')
const path = require('path')


const { MongoClient } = require("mongodb");
const { request } = require('http');
const url = "mongodb+srv://math_animation:bzSsxbPMCntsYMSl@cluster0.2ielq.mongodb.net/Cluster0?retryWrites=true&w=majority";
const dbName = "Cluster0";
const client = new MongoClient(url);

app.use(express.static(path.join(__dirname, 'public')));
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

app.get('/problem', (req,res) => {
    res.sendFile("/public/html/problem.html", {root: __dirname });		
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
	ids.find({"_id" : ObjectId()})
	res.json(result)
	});

app.post('/teacher', (req,res) => {
	const col = client.db(dbName).collection("problems");
	let problemDocument = {
		"variable": req.body.variable,
		"operation": {"val1": req.body.value1, "val2": req.body.value2, "operator": req.body.operator},
		"date": req.body.date
	}
	res.redirect('/teacher')
});

app.listen(3000, () => {
	client.connect(err => {
		console.log('Mongo connected lmao');
	})
  console.log('server started');
});
