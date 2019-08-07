const express = require("express");
let productsRoutes = require("./routes/products");
let vehicleRoutes = require("./routes/vehicle");
let contactsRoutes = require("./routes/contacts");
const bodyParser = require("body-parser");

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



app.listen(thePort, (err) => {
 if (err) {
   return console.log("Error", err);
 }
 console.log("Web server is now listening for messages on port",thePort);
});
