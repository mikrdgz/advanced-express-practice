const express = require("express");
let productsRoutes = require("./routes/products");
let vehicleRoutes = require("./routes/vehicle");
let contactsRoutes = require("./routes/contacts");
let mongoose = require("mongoose");
const bodyParser = require("body-parser");

const dbUrl = 'mongodb+srv://mika:kgubf6gDv63TSgV@cluster0-kro0j.mongodb.net/test?retryWrites=true';

mongoose.connect(dbUrl, {useNewUrlParser: true});

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Theodora' });
kitty.save().then(() => console.log('meow'));

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
