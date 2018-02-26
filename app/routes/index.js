const express = require('express');
const router = express.Router();
const apiCallController = require('../controller/apiCallController');
const userAuthController = require('../controller/userAuthController')
var jwt    = require('jsonwebtoken');
var config = require('../config'); 



router.get('/', apiCallController.homePage);

router.get('/data',  apiCallController.rickyNMortyData)

router.post('/add-quotes' , apiCallController.addQuote)

router.get('/get-all-fav-quotes', apiCallController.getAllFavouriteQuotes)

router.delete('/quotes/delete', apiCallController.deleteFavouriteQuote)

router.post('/login',  userAuthController.loginRequired)
router.post('/register', userAuthController.register)
router.post('/signin', userAuthController.sign_in)

router.get('/users', userAuthController.users)

module.exports = router;