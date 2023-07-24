const mongoose = require('mongoose');

const FeeHeadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  frequency_months: {
    type: Number,
    required: true,
  },
  // Add other properties as per your requirements
});

const FeeHead = mongoose.model('FeeHead', FeeHeadSchema);

module.exports = FeeHead;
