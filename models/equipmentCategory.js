const Schema = require('mongoose').Schema;

const equipmentCategorySchema = new Schema({
    index: String,
    name: {type: String, required: true },
    url: String
}, {
    timestamps: true
});

module.exports = mongoose.model('EquipmentCategory', equipmentCategorySchema);