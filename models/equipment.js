const Schema = require("mongoose").Schema;

const equipment = new Schema(
  {
    index: String,
    name: { type: String, required: true },
    cost: {
      quantity: Number,
      unit: String,
    },
    url: String,
  },
  {
    timestamps: true,
  }
);

module.exports = equipment;
