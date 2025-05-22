const mongoose = require('mongoose');

const blockSchema = new mongoose.Schema({
  userId: String,
  sites: [String]
});

module.exports = mongoose.model('Blocklist', blockSchema);
