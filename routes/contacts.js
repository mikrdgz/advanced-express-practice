const express = require("express");
const router = express.Router();
let contacts = require("../contacts");

router.get('/contacts, function', (req, res) => {
    res.json(contacts)
  })
  
  router.get('/contacts/:contactId', (req,res) =>{
    let id = contacts.filter(i => i._id == req.params.contactId);
    res.json(id)
  })
  
  router.post('/contacts',(req,res)=>{
    let contact = req.body;
    contacts.push(contact);
    res.json(contact);
  })

  module.exports = router;
