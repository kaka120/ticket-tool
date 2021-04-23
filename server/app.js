const express = require('express');
const bodyParser = require('body-parser');
var multer = require('multer');
const keys = require("./keys");


const mongoose = require('mongoose');

 mongoose.set('useNewUrlParser', true);
 mongoose.set('useFindAndModify', false);
 mongoose.set('useCreateIndex', true);
 mongoose.set('useUnifiedTopology', true);

var upload = multer();
const app= express() 
var cors = require('cors')
// Add headers
app.use(cors())
const parent_router = require('./routes/parent_router');
const env_custom_variable = require('./env/env');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(upload.array()); 
app.use(express.static('public'));
 const port = keys.serverPort || '5000';
//const port = '5000';


//console.log(env_custom_variable.parsed.MONGO_URI)

mongoose.connect("mongodb://mongodb:27017/mongo-test")
  .then((result) => app.listen(port,function(){
    console.log(`Server started on Port ${port}`);
  }))
  .catch((err) => console.log(err));
app.use('/api', parent_router); 

// app.listen(port,function(){
//     console.log("Testing Server is listning at port 5000")
// })

app.get('/test', (req,res) => res.send(`<h1>Deployed on Heroku 1</h1>`))
