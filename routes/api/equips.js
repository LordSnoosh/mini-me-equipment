const express = require("express");
const router = express.Router();
const equipsCtrl = require("../../controllers/api/equips");

router.get("/", equipsCtrl.index);
router.get("/:id", equipsCtrl.show);

module.exports = router;
