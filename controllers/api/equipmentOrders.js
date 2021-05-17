const Order = require('../../models/equipmentOrder');
const equipment = require('../../models/equipment');

module.exports = {
  cart,
  addToCart,
  setItemQtyInCart,
  checkout,
  orders,
};

// class App {
//   testingRoute = (req, res) => {
//     try{
//       res.send('Hello World')
//     }catch(error) {
//       res.json({message : error})
//     }
//   }
// }
// const testingApp = new App()
// async function saveOrder(orderToSave) {
//   Order.create(orderToSave).exec();
// }

async function orders(req, res) {
  const orders = await Order.getOrders(req.user._id);
  res.json(orders);
}

async function cart(req, res) {
  // A cart is the unpaid order for a user
  const cart = await Order.findOne({ orderId: req.body.orderId });
  res.json(cart);
}

async function addToCart(req, res) {
  // Add the item to the cart
  console.log(`${req.body}`);
  try {
    const equipment = await Order.create(req.body);
    res.status(201).json(equipment);
  } catch(err) {
    res.status(400).json(err);
  }
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
