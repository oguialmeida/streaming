const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  dependents: [String],
  history: [{
    content: { type: mongoose.Schema.Types.ObjectId, ref: 'Content' },
    dateWatched: Date
  }]
});

module.exports = mongoose.model('User', userSchema);
