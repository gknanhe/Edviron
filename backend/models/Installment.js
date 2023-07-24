const mongoose = require('mongoose');

const InstallmentSchema = new mongoose.Schema({
  dues: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Due',
    required: true,
  }],
  // Add other properties as per your requirements
});

const Installment = mongoose.model('Installment', InstallmentSchema);

module.exports = Installment;
