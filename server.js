const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();

var jwt    = require('jsonwebtoken'); 
var mongoose    = require('mongoose');
var config = require('./app/config')
var User   = require('./app/models/user'); 
//const db = require('./app/db')



const routes = require('./app/routes/index');

const port = 8000;

mongoose.connect(config.database); // connect to database

app.listen(port, () => {
       console.log('We are live on ' + port);
 });

app.use( bodyParser.json() ); 
app.use(express.urlencoded());

app.use('/', routes);



