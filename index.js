const express = require("express");
let comments = require("./comments");
let products = require("./products");
let vehicles = require("./vehicles");
let contacts  = require("./contacts");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));


//comments

app.get('/comments', function (req, res) {
  res.json(comments)
})

app.get('/comments/:commentId',function (req,res) {
  let id = comments.filter(i => i._id == req.params.commentId);
  res.json(id)
})

app.post('/comments',(req,res)=>{
  let comment = req.body;
  comments.push(comment);
  res.json(comment);
})

//contacts
app.get('/contacts', function (req, res) {
  res.json(contacts)
})

app.get('/contacts/:contactId', (req,res) =>{
  let id = contacts.filter(i => i._id == req.params.contactId);
  res.json(id)
})

app.post('/contacts',(req,res)=>{
  let contact = req.body;
  contacts.push(contact);
  res.json(contact);
})

//products

app.get('/products', (req, res) => {
  res.json(products)
})

app.get('/products/:productId', (req,res) =>{
  let id = products.filter(i => i._id == req.params.productId);
  res.json(id)
})

app.post('/products',(req,res)=>{
  let product = req.body;
  products.push(product);
  res.json(product);
})

//vehicles

// server
const thePort = 8000;


app.listen(thePort, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages on port",thePort);
});
