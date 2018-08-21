'use strict';
var Sequelize = require('sequelize');
var db        = {};

var sequelize = new Sequelize({
  host:'-',
  user:'-',
  password:'-',
  database:'-',
  dialect: '-',
});

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
