const Schema = require('mongoose').Schema;

const equipmentCategorySchema = new Schema({
    index: String,
    name: {type: String, required: true },
    url: {`${BASE_URL}/equipment-categories/${index}/`}
})