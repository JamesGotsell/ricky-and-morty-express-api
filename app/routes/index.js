const express = require('express');
const router = express.Router();
const apiCallController = require('../controller/apiCallController');

router.get('/', apiCallController.homePage);
router.get('/data',  apiCallController.rickyNMortyData)

router.post('/quotes' , apiCallController.addQuote)

router.get('/get-all-fav-quotes', apiCallController.getAllFavouriteQuotes)

router.get('/quotes/:id/delete', apiCallController.deleteFavouriteQuote)
module.exports = router;