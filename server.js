const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();

 const routes = require('./app/routes/index');

const port = 8000;
app.listen(port, () => {
  console.log('We are live on ' + port);
});

app.use( bodyParser.json() ); 
app.use(express.urlencoded());

app.use('/', routes);



