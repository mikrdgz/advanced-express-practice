const express = require("express");
const router = express.Router();
const {list, show, create, update, remove} = require("../controllers/products")

router.get('/products', list);
  
  router.get('/products/:productId', show);
  
  router.post('/products', create);

  router.put('/products', update);

  router.delete('/products', remove);

  module.exports = router;