/**
 * Routing for the products
 * 
 */


 //Dependencies
const express = require('express');
const route = express.Router();
const productcntrl =require('../controller/product.controller');
 /**
  * Routes
  */

  //Add the product
route.post('/',(req,res)=>{
    res.status(200).json({success:'Product created'});
});
  //Delete the product
route.delete('/:id',(req,res)=>{
    res.status(204).json({success:'Product Deleted'});
});
  //Read all the products
  route.get('/',productcntrl.getAll);

  //Read a single product
   route.get('/:id',(req,res)=>{
       res.status(200).json({data:'single product'});
   });
  //update the product
route.patch('/:id',(req,res)=>{
    res.status(200).json({success:'Product updated'});
});   

  //Export this module
  module.exports =route;