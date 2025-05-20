const mongoose = require('mongoose');
// const validator = require('validator');

// {
//   "title": "Похлебка",
//   "ingredients": ["6822f9bcfb673f96f8c59f54", "6822fd1cfb673f96f8c59f6d",
// "6822fd1cfb673f96f8c59f80", "6822fd1cfb673f96f8c59f81", "6822fd1cfb673f96f8c59f83",
// "6822fd1cfb673f96f8c59f84", "6822fd1cfb673f96f8c59f85"],
//   "steps": ["Почистить", "Сварить"],
//   "category": "6822ee11fb673f96f8c59f36",
//   "duration": 120,
//   "level": 2,
//   "owner": "68232f1bfb673f96f8c59fbe",
//   "dateCreated": 1747136355454,
// }

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  ingredients: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'ingredient',
    required: true,
  },
  steps: {
    type: [String],
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'category',
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  level: {
    type: Number,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  dateCreated: {
    type: Number,
    required: true,
  },
  dateUpdated: {
    type: Number,
    default: 0,
  },
  // likes: {
  //   type: [mongoose.Schema.Types.ObjectId],
  //   ref: 'user',
  //   default: [],
  // },
  // rating: {
  //   type: [mongoose.Schema.Types.ObjectId],
  //   ref: 'rating',
  //   default: [],
  // },
});

module.exports = mongoose.model('recipe', recipeSchema);
