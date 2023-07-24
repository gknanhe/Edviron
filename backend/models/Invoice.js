const mongoose = require('mongoose');

const InvoiceSchema = new mongoose.Schema({
  dues: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Due',
    required: true,
  }],
  // Add other properties as per your requirements
});

const Invoice = mongoose.model('Invoice', InvoiceSchema);

module.exports = Invoice;
