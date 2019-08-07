let products = require("../products");


exports.list = (req,res) => {
    return res.json(products);
}

exports.show = (req,res) => {
    let id = products.filter(i => i._id == req.params.productsId);
res.json(id);
}

exports.create = (req,res) => {
    let newProduct = req.body;
    productss.push(newProduct);
    res.json(newProduct);
}

exports.update = (req,res) => {
    let id = products.filter(i => i._id == req.params.productsId);
        product.make = body.make;
        response.json(product);

}

exports.remove = (req,res) => {
    let product = products.find(i => i._id == req.params.productsId);
    product.isActive = false;
    response.send("Deleted")
}