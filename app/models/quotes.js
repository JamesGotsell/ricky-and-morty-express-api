var mongoose = require('mongoose')

var Schema = mongoose.Schema

module.exports = mongoose.model('Quote', new Schema({
    quote: String
}));