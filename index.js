let express = require("express");
let comments = require("./comments");
let products = require("./products");
let vehicles = require("./vehicles");
let contacts  = require("./contacts");

const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));



//rooty
app.get('/', (req, res) => res.send('Hello World!'))

//comments

app.get('/comments', function (req, res) {
  res.json(comments)
})

app.get('/comments/:commentId',function (req,res) {
  let id = comments.filter(i => i._id == req.params.commentId);
  res.json(id)
})

//contacts
app.get('/contacts', function (req, res) {
  res.json(contacts)
})

app.get('/contacts/:contactId', (req,res) =>{
  let id = contacts.filter(i => i._id == req.params.contactId);
  res.json(id)
})

//products

app.get('/products', function (req, res) {
  res.json(products)
})

app.get('/products/:productId', (req,res) =>{
  let id = products.filter(i => i._id == req.params.productId);
  res.json(id)
})

//vehicles
app.get('/vehicles', function (req, res) {
  res.json(vehicles)
})

app.get('/vehicles/:vehiclesId', (req,res) =>{
  let id = vehicles.filter(i => i._id == req.params.vehiclesId);
  res.json(id)
})


// server
const thePort = 8000;


app.listen(thePort, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages on port",thePort);
});
