const express = require("express");
const router = express.Router();
let vehicles = require("../vehicles");



router.get('/vehicles', function (req, res) {
    res.json(vehicles)
  })
  
  router.get('/vehicles/:vehiclesId', (req,res) =>{
    let id = vehicles.filter(i => i._id == req.params.vehiclesId);
    res.json(id)
  })
  
  router.post('/vehicles',(req,res)=>{
    let vehicle = req.body;
    vehicles.push(vehicle);
    res.json(vehicle);
  })
  
  module.exports = router;
