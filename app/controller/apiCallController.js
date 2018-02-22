var fetch = require('node-fetch');
const bodyParser = require('body-parser');
// var ObjectID = require("mongodb").ObjectID;
// var db = require('../db')
var Quote  = require('../models/quotes');
const url = 'http://loremricksum.com/api/?paragraphs=5&quotes=3'
exports.homePage = (req, res) => {
  res.send("hello this is my rick and morty express app")
};

exports.rickyNMortyData = (req, res) => {
  fetch(url)
    .then(res => res.json())
    .then(json => {
          console.log(json)
           let data = {...json}
           res.json(data)
      });
}

exports.addQuote = (req, res , next) => {
   
      var quote = new Quote({ 
        quote: req.body.quote   
      });
      console.log(req.body.quote)
      quote.save(function(err) {
        if (err) throw err;
        console.log('quote saved successfully');
        res.send('quote saved successfully')
        res.json({ success: true });
      });
       
}

exports.getAllFavouriteQuotes  = (req, res, next) => {
  Quote.find({}, function(err, quotes) {
    res.json(quotes);
  })
}

exports.deleteFavouriteQuote = ( req, res , next) => {
  Quote.remove({ _id: req.body.id }, function(err) {
    if (!err) {
                const response = {
                message: " successfully deleted",
                id: req.body.id
             }
             res.send(response)
    }
    else {
            const response = {
              message: " not deleted",
              id: req.body.id
          }
     res.send(response)
    }
});
}