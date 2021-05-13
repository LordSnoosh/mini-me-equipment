const express = require('express');
const router = express.Router();
const equipmentOrdersCtrl = require('../../controllers/api/equipmentOrders');

// GET /api/orders/cart
router.get('/cart', equipmentOrdersCtrl.cart);
// GET /api/orders
router.get('/', equipmentOrdersCtrl.orders);
// POST /api/orders/cart/items/:id
router.get('/cart/items/:id', equipmentOrdersCtrl.addToCart);
// POST /api/orders/cart/checkout
router.get('/cart/checkout', equipmentOrdersCtrl.checkout);
// POST /api/orders/cart/qty
router.put('/cart/qty', equipmentOrdersCtrl.setItemQtyInCart);

module.exports = router;