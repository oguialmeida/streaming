const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  title: String,
  category: String,
  type: { type: String, enum: ['movie', 'series', 'documentary'] },
  actors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Actor' }]
});

module.exports = mongoose.model('Content', contentSchema);
