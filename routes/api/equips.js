const express = require('express');
const router = express.Router();
const equipsCtrl = require('../../controllers/api/equips');

// GET /api/items
router.get('/', equipsCtrl.index);
// GET /api/items/:id
router.get('/:id', equipsCtrl.show);

module.exports = router;
