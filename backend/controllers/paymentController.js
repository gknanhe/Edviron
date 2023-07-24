// Import required modules
const FeeHead = require('../models/FeeHead');
const Due = require('../models/Due');
const Installment = require('../models/Installment');
const Payment = require('/models/Payment');
const Invoice = require('../models/Invoice');
const Transaction = require('../models/Transaction');

// Payment button click controller
const paymentController = async (req, res) => {
  try {
    // Convert Installments[] to Dues[]
    const installments = req.body.installments;
    const dues = [];
    for (const installment of installments) {
      const feeHead = await FeeHead.findById(installment.fee_head);
      const due = new Due({
        fee_head: feeHead._id,
        start_date: feeHead.start_date,
        // Set other properties for the due
      });
      await due.save();
      dues.push(due);
    }

    // Convert Dues[] to Invoice
    const invoice = new Invoice({
      dues: dues.map(due => due._id),
      // Set other properties for the invoice
    });
    await invoice.save();

    // Link Invoice to Transaction
    const transaction = new Transaction({
      invoice: invoice._id,
      // Set other properties for the transaction
    });
    await transaction.save();

    // If Transaction is successful, create a payment for each due in Transaction.invoice.dues
    for (const due of invoice.dues) {
      const payment = new Payment({
        due: due._id,
        // Set other properties for the payment
      });
      await payment.save();
    }

    res.status(200).json({ message: 'Payment processed successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error.' });
  }
};

module.exports = {
  paymentController,
};
