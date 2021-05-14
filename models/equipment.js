const mongoose = require('mongoose');

const equipmentSchema = require('./equipmentSchema');

module.exports = mongoose.model('equipment', equipmentSchema);