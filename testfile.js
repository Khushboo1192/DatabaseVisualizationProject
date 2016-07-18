var mongoose = require('mongoose');
module.exports = mongoose.model('TestFile', {
    year: String,
    make: String,
    model: String,
    description: String,
    price: String
});