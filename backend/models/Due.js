const mongoose = require('mongoose');

const DueSchema = new mongoose.Schema({
  fee_head: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'FeeHead',
    required: true,
  },
  start_date: {
    type: Date,
    required: true,
  },
  // Add other properties as per your requirements
});

const Due = mongoose.model('Due', DueSchema);

module.exports = Due;
