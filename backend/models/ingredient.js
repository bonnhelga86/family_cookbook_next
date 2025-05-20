const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
  parentId: {
    type: String,
    default: '0',
  },
  title: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('ingredient', ingredientSchema);
