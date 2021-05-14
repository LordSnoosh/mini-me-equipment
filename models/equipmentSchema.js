const Schema = require("mongoose").Schema;

const equipmentSchema = new Schema(
  {
    index: String,
    name: { type: String, required: true },
    equipment_category: {
      index: String,
    },
    weapon_category: String,
    weapon_range: String,
    category_range: String,
    cost: {
      quantity: Number,
      unit: String,
    },
    damage: {
      damage_dice: String,
      damage_type: {
        name: String,
        index: String,
      },
    },
    range: {
      normal: Number,
      long: Number,
    },
    weight: Number,
    url: String,
  },
  {
    timestamps: true,
  }
);

module.exports = equipmentSchema;
