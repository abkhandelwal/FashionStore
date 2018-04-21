// module.exports = (req,res) => {
//     res.end('Welcome to node');
// }

const express =require('express');

const app = express();

// app.get('/',(req,res)=>{
//     res.status(200).send('hello world');
// });

const home= require('./routes/home.routes');

app.use('/',home);
module.exports =app;