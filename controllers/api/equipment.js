const Equipment = require('../../models/equipment');

module.exports = {
  index,
  show
};

async function index(req, res) {
  const equips = await Equipment.find({}).sort('name').populate('category').exec();
  // re-sort based upon the sortOrder of the categories
  equips.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
  res.json(equips);
}

async function show(req, res) {
  const equipment = await Equipment.findById(req.params.id);
  res.json(equipment);
}