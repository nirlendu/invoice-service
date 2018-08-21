const connection = require('../config/db.js');
const models = require('../models');
let OrderDao = {};

OrderDao.findOrder = function(id){
  models.Order.findOne({where:{
    id : id
  }}, function (error, results, fields) {
    return results[0];
  })
}

module.exports = OrderDao;
