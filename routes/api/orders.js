const express = require("express");
const router = express.Router();
const equipmentOrdersCtrl = require("../../controllers/api/equipmentOrders");

router.post("/", equipmentOrdersCtrl.checkout);

module.exports = router;
