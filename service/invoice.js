
const orderDao = require('../dao/order.js');

let Invoice = {}

/**
*  CODE FOR INVOICE GENERATION
*  RETURNS STATUS CODE (200, 500)
*  IF 200, ALSO THE s3 LINK
*/
Invoice.generateInvoice = function(orderId){

  const orderDetails = orderDao.findOrder(orderId);
  //GENERATE PDF - DUMMY FUNCTION
  let pdfResponse = generatePdf(orderDetails);
  // ADD A FEW MORE PARAMS IF NEEDED
  return pdfResponse

}

/** RETRY GENERATION */
Invoice.retryGenerateInvoice = function(orderId){

  const orderDetails = orderDao.findOrder(orderId);
  //GENERATE PDF - DUMMY FUNCTION
  let pdfResponse = generatePdf(orderDetails);
  // ADD A FEW MORE PARAMS IF NEEDED
  return pdfResponse

}

/** Check of email is sent */
Invoice.checkEmail = function(orderId){
}

/** CHECK IF SMS IS SENT */
Invoice.checkSms = function(orderId){
}

module.exports = Invoice;
