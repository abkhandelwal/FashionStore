
const mongoose = require('mongoose');
const Product = require('../model/productdb');

module.exports = {

createProduct: (req,res) =>{
    const newproduct =new Product({
        title :req.body.title,
        price : req.body.price,
        category : req.body.category,
        imgUrl:req.body.imgUrl
    });
    newproduct.save().then(data =>{
        res.status(201).json({
            message:'product updated',
            data :data
    });
    }).catch(err =>{res.status(500).json({error :'error in update'})
})
},

deleteProduct: (req,res) =>{
    Product.remove({_id:req.params.id}).exec().then(data =>
        res.status(200).json({
            message:'product deleted',
            data : data
        })
    ).catch(err => res.status(500).json({error : 'error in delete'})
    )
} ,
getAll: (req, res) => {
    Product.find().exec()
      .then(products => {
        if (products.length == 0) {
          return res
            .status(404)
            .json({ message:'product delivered',
            data : data });
        }
        return res.status(200).json(products);
      })
      .catch(err => res.status(500).json({ error:'error in fetching the product'}));
  }

}