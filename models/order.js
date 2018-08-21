
module.exports = function (sequelize, DataTypes) {

  let Order = sequelize.define('Order', {
    transaction_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true
    },
    user_id: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      default: 0
    },
    payment_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true
    }
  }, {
    tableName: 'Order'
  });

  return Order;
};
