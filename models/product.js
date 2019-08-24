const mongoose = require("mongoose");

var prodSchema = new mongoose.Schema({
name: String,
description: String,
reviews: Array,
rating: Number,
imgUrl: String,
price: String,
category: String,
  });
  
var Product = mongoose.model("Product", prodSchema);

  module.exports = Product;