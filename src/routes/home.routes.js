const express = require('express');
const route = express.Router();

route.get('/',(req,res) =>{
  res.status(200).send('Hello BOGO');
})

module.exports =route;