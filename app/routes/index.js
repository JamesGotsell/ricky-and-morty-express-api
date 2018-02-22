const express = require('express');
const router = express.Router();
const apiCallController = require('../controller/apiCallController');
const userAuthController = require('../controller/userAuthController')

router.get('/', apiCallController.homePage);
router.get('/data',  apiCallController.rickyNMortyData)

router.post('/add-quotes' , apiCallController.addQuote)

router.get('/get-all-fav-quotes', apiCallController.getAllFavouriteQuotes)

router.delete('/quotes/delete', apiCallController.deleteFavouriteQuote)

router.post('/login',  userAuthController.login)
router.get('/users', userAuthController.users)

module.exports = router;