let express = require("express");
let comments = require("./comments");
let products = require("./products");
let vehicles = require("./vehicles");
let contacts  = require("./contacts");

const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));



//get
app.get('/', (req, res) => res.send('Hello World!'))

app.get('/contacts', function (req, res) {
  res.json(contacts)
})
app.get('/products', function (req, res) {
  res.send('Hello world')
})
app.get('/vehicles', function (req, res) {
  res.send('Hello world')
})
app.get('/comments', function (req, res) {
  res.send('Hello world')
})

//put

app.put('/', function (req, res) {
  res.send('Hello world')
})

//post

app.post('/', function (req, res) {
  res.send('Hello world')
})



// server
const thePort = 8000;


app.listen(thePort, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages on port",thePort);
});
