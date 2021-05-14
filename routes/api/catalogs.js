const express = require('express');
const router = express.Router();
const catalogsCtrl = require('../../controllers/api/catalog');

// GET /api/catalogs
router.get('/', catalogsCtrl.index);
// GET /api/catalogs/:id
router.get('/:id', catalogsCtrl.show);

module.exports = router;
