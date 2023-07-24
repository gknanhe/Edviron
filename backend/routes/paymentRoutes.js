const express = require('express');
const router = express.Router();
const { paymentController } = require('../controllers/paymentController');

// Payment button click route
router.post('/payment', paymentController);

module.exports = router;
