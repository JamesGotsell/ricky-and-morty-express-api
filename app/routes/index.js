const express = require('express');
const router = express.Router();
const apiCallController = require('../controller/apiCallController');
const userAuthController = require('../controller/userAuthController')
var jwt    = require('jsonwebtoken');
var config = require('../config'); 

 // issue with token 
// router.use(function (req, res, next){
//   var token = req.body.token || req.query.token || req.headers['x-access-token'];

//   if(token) {
//       jwt.verify(token, config.secret), function(err, decoded){
//         if(err){
//           return res.json({ success: false, message: 'Failed to auth token'});
//         }else {
//           req.decoded = decoded;
//           next()
//         }
//       }
//   }else {
//     return res.status(403).send({ 
//       success: false, 
//       message: 'No token provided.' 
//   });

//   }
// })

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbiI6dHJ1ZSwiaWF0IjoxNTE5NTExNTE1LCJleHAiOjE1MTk1MTI5NTV9.PMaZD5aWfT5U37bf7Dn0Bquj4EbCQBMCrTboPdiA2nE

router.post('/authenticate', userAuthController.authenticate) 

router.get('/', apiCallController.homePage);

router.get('/data',  apiCallController.rickyNMortyData)

router.post('/add-quotes' , apiCallController.addQuote)

router.get('/get-all-fav-quotes', apiCallController.getAllFavouriteQuotes)

router.delete('/quotes/delete', apiCallController.deleteFavouriteQuote)

router.post('/login',  userAuthController.login)

router.get('/users', userAuthController.users)

module.exports = router;