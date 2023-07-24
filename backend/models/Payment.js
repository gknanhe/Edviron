const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  due: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Due',
    required: true,
  },
  // Add other properties as per your requirements
});

const Payment = mongoose.model('Payment', PaymentSchema);

module.exports = Payment;
