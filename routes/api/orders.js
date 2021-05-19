const express = require("express");
const router = express.Router();
const equipmentOrdersCtrl = require("../../controllers/api/equipmentOrders");

router.post("/", equipmentOrdersCtrl.checkout);
//for now all this router does is submit to the DB
module.exports = router;
