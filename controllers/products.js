let ProductModel = require('../models/product');
let mongoose = require("mongoose")


//get all products

exports.list = (req,res)=> {
    ProductModel.find(function(err,prods){
        if(err){
            console.log(err)
        }
        return res.json(prods)
    })
}; 

exports.show = (req,res) => {
    ProductModel.findById(request.params.productId, function(err,products){
if(err) return console.log(err);
return response.json(products)
    })
};


exports.create = (req,res) => {
    const newProduct = new ProductModel(request.body);
    newProduct.save((err,prod)=>
    response.json(prod)
   )
};

exports.update = (req,res) => {
    ProductModel.findByIdAndUpdate(id,request.body, function(err,prod){
        if(err) return console.log(err);
        return response.json(products)
        })
}

exports.remove = (req,res) => {
    let product = products.find(i => i._id == req.params.productsId);
    product.isActive = false;
    response.send("Deleted")
}