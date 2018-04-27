// module.exports = (req,res) => {
//     res.end('Welcome to node');
// }

const express =require('express');

const app = express();
//db connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fashion_store').then(con =>console.log('connection stablished'))
.catch(err =>console.log('db error'));
// app.get('/',(req,res)=>{
//     res.status(200).send('hello world');
// });

const home= require('./routes/home.routes');

const product = require('./routes/product.routes.js');

app.use('/',home);
app.use('/product',product);
module.exports =app;