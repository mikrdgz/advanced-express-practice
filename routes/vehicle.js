const express = require("express");
const router = express.Router();
const {list, show, create, update, remove} = require("../controllers/vehicles")



router.get('/vehicles', list)
  
  router.get('/vehicles/:vehiclesId', show);
  
  router.post('/vehicles', create);

  router.put('/vehicles',update);

  router.delete('/vehicles', remove);


  
  module.exports = router;
