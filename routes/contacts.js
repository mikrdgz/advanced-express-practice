const express = require("express");
const router = express.Router();
const {list, show, create, update, remove} = require("../controllers/contacts")

router.get('/contacts', list);
  
  router.get('/contacts/:contactId', show);
  
  router.post('/contacts',create);

  router.put('/contacts', update);

  router.delete('contacts', remove);


  module.exports = router;
