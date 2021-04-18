//import express
let express = require('express');
// start app
let app = express();

require('dotenv').config();

//assign port
var port = process.env.port || 8080;

//Welcome message
app.get('/',(req,res)=> res.send('Welcome to Express'));


//Launch app on specified port
app.listen(port, function(){
    console.log('app running on port no '+port);
})

//import mongoose
const mongoose = require('mongoose');
//connect to mongoose
mongoose.connect(process.env.DATABASE_URL,
{ useNewUrlParser: true, useUnifiedTopology: true },
()=> console.log('connected to db'))


app.use(express.json());
//import routes
const authRoute = require('./routes/auth');
const postRoute = require('./routes/services');
//Route middleware
app.use('/api/user', authRoute);
app.use('/api/posts', postRoute);


