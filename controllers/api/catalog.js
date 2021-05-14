const Catalog = require('../../models/equipment');

module.exports = {
  index,
  show
};

async function index(req, res) {
  const catalogs = await Catalog.find({}).sort('name').populate('cost').exec();
  // re-sort based upon the sortOrder of the categories
  catalogs.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
  res.json(catalogs);
}

async function show(req, res) {
  const equipment = await Catalog.findById(req.params.id);
  res.json(equipment);
}