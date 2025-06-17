// backend/models/Fundraiser.js
const mongoose = require('mongoose');

const fundraiserSchema = new mongoose.Schema({
  title: String,
  description: String,
  goalAmount: Number,
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

module.exports = mongoose.model('Fundraiser', fundraiserSchema);
