const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();

const db = require('./app/db')

const routes = require('./app/routes/index');

const port = 8000;

db.connect('mongodb://localhost:27017/quotes', function(err) {
  if (err) {
    console.log('Unable to connect to Mongo.')
    process.exit(1)
  } else {
    app.listen(port, () => {
      console.log('We are live on ' + port);
    });
    
  }
})

app.use( bodyParser.json() ); 
app.use(express.urlencoded());

app.use('/', routes);



