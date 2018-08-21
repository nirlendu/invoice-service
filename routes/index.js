const express = require('express');
let router = express.Router();

const Invoice = require('../service/invoice.js');

// THIS FILE WILL BE CONSUMING THE MESSAGES - IN THE MAIN QUEUE AND THE FAILED QUEUE
const InvoiceConsumer = require('../consumer/invoice.js');

// RETRY MECHANISM
const RETRY = 3;

/* CREATE short url */
router.post('/order-post-process', function(req, res, next) {

  const orderId = req.body.orderId;
  const generationResponse = invoice.generateInvoice(orderId);
  if(generationResponse.status != 200){
    if( generationResponse.status == (400, 401, 402, 403, 404)){
      // RESOURCES ARE NOT PRESENT, PUSH TO QUEUE, NO NEED TO RETRY
      //TODO
    }
    if( generationResponse.status == (500, 501, 502, 503)){
      // SOME EXCEPTION HAPPENED, RETRY NEEDED
      for(let i;i<RETRY;i++){
        let retryGenerationResponse = invoice.retryGenerateInvoice(orderId);
      }
    }

    // PUSH IT TO FAILED QUEUE AS IT FAILED REPEATEDLY
    if(retryGenerationResponse.status != 200){
      //TODO
    }
  }

  if(!Invoice.checkEmail(orderId)){
    // TRIGGER EMAIL SERVICE
  }

  if(!Invoice.checkSms(orderId)){
    // TRIGGER EMAIL SERVICE
  }

});

module.exports = router;
