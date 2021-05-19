const Order = require('../../models/equipmentOrder');

module.exports = {
  checkout,
};

async function checkout(req, res) {
  console.log(req.body);
  try {
    const order = await Order.create({ 
      user: req.user._id,
      lineItems: req.body
     });
    res.status(201).json(order);
  } catch(err) {
    res.status(400).json(err);
  }
}

