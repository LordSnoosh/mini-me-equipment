const EquipmentOrder = require('../../models/equipmentOrder');
const Equipment = require('../../models/equipment');

module.exports = {
  cart,
  addToCart,
  setItemQtyInCart,
  checkout,
  orders: equipmentOrders,
};

async function equipmentOrders(req, res) {
  const orders = await EquipmentOrder.getOrders(req.user._id);
  res.json(orders);
}

async function cart(req, res) {
  // A cart is the unpaid order for a user
  const cart = await EquipmentOrder.getCart(req.user._id);
  res.json(cart);
}

async function addToCart(req, res) {
  // Add the item to the cart
  const cart = await EquipmentOrder.getCart(req.user._id);
  await cart.addItemToCart(req.params.id);
  res.json(cart);
}

// Updates an item in the cart's qty
async function setItemQtyInCart(req, res) {
  const cart = await EquipmentOrder.getCart(req.user._id);
  await cart.setItemQty(req.body.itemId, req.body.newQty);
  res.json(cart);
}

async function checkout(req, res) {
  // Update the cart's isPaid property to true
  const cart = await EquipmentOrder.getCart(req.user._id);
  cart.isPaid = true;
  await cart.save();
  res.json(cart);
}
