const express = require("express");
const router = express.Router();
let products  = require("../products");

router.get('/products', (req, res) => {
    res.json(products)
  })
  
  router.get('/products/:productId', (req,res) =>{
    let id = products.filter(i => i._id == req.params.productId);
    res.json(id)
  })
  
  router.post('/products',(req,res)=>{
    let product = req.body;
    products.push(product);
    res.json(product);
  })

  module.exports = router;