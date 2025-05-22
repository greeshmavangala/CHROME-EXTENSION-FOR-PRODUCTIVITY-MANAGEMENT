const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  site: String,
  duration: Number,
  userId: String,
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Report', reportSchema);
