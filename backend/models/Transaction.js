const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  invoice: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Invoice',
    required: true,
  },
  // Add other properties as per your requirements
});

const Transaction = mongoose.model('Transaction', TransactionSchema);

module.exports = Transaction;
