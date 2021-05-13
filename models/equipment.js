const mongoose = require('mongoose');
// Ensure the Category model is processed by Mongoose (for populated queries)
require('./category');
const equipmentSchema = require('./equipmentSchema');

module.exports = mongoose.model('Equipment', equipmentSchema);