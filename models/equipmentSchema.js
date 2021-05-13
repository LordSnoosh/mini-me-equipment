const Schema = require('mongoose').Schema;

const equipmentSchema = new Schema({
    index: String,
    name: {type: String, required: true },
    weapon_category: String,
    weapon_range: String,
    category_range: String,
    cost: {type: Number, required: true, default: 0 },
    damage: {
        damage_dice: String,
        damage_type: {
            name: String,
            index: String,
        }
    },
    range: {
        normal: Number,
        long: Number,
    },
    weight:  Number,
    
})