const mongoose = require('mongoose');
const equipmentSchema = require('./equipmentSchema');
const Schema = mongoose.Schema;

const equipmentItemSchema = new Schema({
  qty: { type: Number, default: 1 },
  item: equipmentSchema
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

equipmentItemSchema.virtual('extPrice').get(function() {
  // 'this' is bound to the lineItem subdoc
  return this.qty * this.item.price;
});

const orderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User'},
  lineItems: [equipmentItemSchema],
  isPaid: { type: Boolean, default: false }
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

orderSchema.virtual('orderTotal').get(function() {
  // 'this' is bound to the order doc
  return this.lineItems.reduce((total, item) => total + item.extPrice, 0);
});

orderSchema.virtual('totalQty').get(function() {
  // 'this' is bound to the order doc
  return this.lineItems.reduce((total, item) => total + item.qty, 0);
});

orderSchema.virtual('orderId').get(function() {
  // 'this' is bound to the order doc
  return this.id.slice(-6).toUpperCase();
});

orderSchema.statics.getCart = function(userId) {
  // 'this' is bound to the model
  return this.findOneAndUpdate(
    // query
    { user: userId, isPaid: false },
    // update - in the case that we are inserting
    { user: userId },
    // upsert option creates the doc if it doesn't exist
    { upsert: true, new: true }
  );
};

orderSchema.statics.getOrders = function(userId) {
  return this.find({ user: userId, isPaid: true });
};

// Instance method for adding an item to a cart (unpaid order)
orderSchema.methods.addItemToCart = async function (itemId) {
  // this keyword is bound to the cart (order doc)
  const cart = this;
  // Check if the item already exists in the cart
  const lineItem = cart.lineItems.find(lineItem => lineItem.item._id.equals(itemId));
  if (lineItem) {
    // It already exists, so increase the qty
    lineItem.qty += 1;
  } else {
    // Get the item from the "catalog"
    const item = await mongoose.model('Item').findById(itemId);
    cart.lineItems.push({ item });
  }
  // return the save() method's promise
  return cart.save();
};

orderSchema.methods.setItemQty = function(itemId, newQty) {
  const cart = this;
  const lineItem = cart.lineItems.find(lineItem => lineItem.item._id.equals(itemId));
  if (lineItem && newQty <= 0) {
    lineItem.remove();
  } else if (lineItem) {
    lineItem.qty = newQty;
  }
  return cart.save();
};

module.exports = mongoose.model('Order', orderSchema);