const express = require("express");
let productsRoutes = require("./routes/products");
let vehicleRoutes = require("./routes/vehicle");
let contactsRoutes = require("./routes/contacts");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const Product = require('./models/product')

const dbUrl =
  "mongodb+srv://mika:kgubf6gDv63TSgV@cluster0-kro0j.mongodb.net/aca-store?retryWrites=true";

mongoose.connect(dbUrl, { useNewUrlParser: true });


// newProduct.save(function (err, newProduct) {
//   if (err) return console.error(err);
// console.log(newProduct)});

// Cat.find({age:12}, function(cats,err){
//   if(err)return console.error(err);
//   console.log(cats)
// })

// Cat.findByIdAndUpdate('5d5092905be20f4551a0d50e', {name: "banan"}, function (err, result){
//   if (err){
//   console.log(err);
//   }
//   console.log('Result' + result)
// });


//express
const app = express();

//body parser
app.use(bodyParser.json());
app.use(express.static("public"));

app.use(productsRoutes);
app.use(vehicleRoutes);
app.use(contactsRoutes);
//port
const thePort = 8000;

app.listen(thePort, err => {
  if (err) {
    return console.log("Error", err);
  }
  console.log("Web server is now listening for messages on port", thePort);
});
