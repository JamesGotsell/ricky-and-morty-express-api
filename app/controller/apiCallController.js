var fetch = require('node-fetch');
const bodyParser = require('body-parser'); 

const url = 'http://loremricksum.com/api/?paragraphs=1&quotes=3'
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
      // i need to make sure sure that that what gets send to this endpoint is a 
      const successStatus = 200;
      const failure = 400 
      console.log(req.body)
      if(req.body !== undefined || '') {
        res.sendStatus(successStatus)
      }else {
        res.sendStatus(failure)
      }
     
    
}