const mongoose = require('mongoose');

const actorSchema = new mongoose.Schema({
  name: String,
  realName: String,
  biography: String,
  birthDate: Date
});

module.exports = mongoose.model('Actor', actorSchema);
