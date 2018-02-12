const express = require('express');
const router = express.Router();
const apiCallController = require('../controller/apiCallController');

router.get('/', apiCallController.homePage);
router.get('/data',  apiCallController.rickyNMortyData)

router.post('/quotes' , apiCallController.addQuote)

module.exports = router;