const mongoose = require('mongoose');
const dbschema =  mongoose.Schema;
 
const productSchema= new dbschema({
title:{
    type: String,
    required : true
},
price:{
    type: Number,
    required: true
},
category: {
   type: String,
   required: true
},
 imgurl: { 
    type: String,
    required:true
}
})


module.exports = mongoose.model('product',productSchema);