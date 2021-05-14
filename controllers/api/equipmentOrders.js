const Order = require('../../models/equipmentOrder');
const equipment = require('../../models/equipment');

module.exports = {
  cart,
  addToCart,
  setItemQtyInCart,
  checkout,
  orders,
};

async function orders(req, res) {
  const orders = await Order.getOrders(req.user._id);
  res.json(orders);
}

async function cart(req, res) {
  // A cart is the unpaid order for a user
  const cart = await Order.getCart(req.user._id);
  res.json(cart);
}

async function addToCart(req, res) {
  // Add the item to the cart
  // console.log(req);
  const cart = await Order.getCart(req.user._id);
  await cart.addItemToCart(req.index);
  res.json(cart);
}

// Updates an item in the cart's qty
async function setItemQtyInCart(req, res) {
  const cart = await Order.getCart(req.user._id);
  await cart.setItemQty(req.index, req.newQty);
  res.json(cart);
}

async function checkout(req, res) {
  // Update the cart's isPaid property to true
  const cart = await Order.getCart(req.user._id);
  cart.isPaid = true;
  await cart.save();
  res.json(cart);
}
