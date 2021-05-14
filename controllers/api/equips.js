const Equips = require('../../models/equipment');

module.exports = {
  index,
  show
};

async function index(req, res) {
  const equips = await Equips.find({}).sort('name').populate('category').exec();
  // re-sort based upon the sortOrder of the categories
  equips.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
  res.json(equips);
}

async function show(req, res) {
  const equipment = await Equips.find(req.params.id);
  res.json(equipment);
}