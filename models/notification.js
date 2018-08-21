
module.exports = function (sequelize, DataTypes) {

  let Notification = sequelize.define('Notification', {
    order_id: {
      type: DataTypes.STRING(255),
      unique: true,
      allowNull: false
    },
    has_email_sent: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      default: false
    },
    has_sms_sent: {
      type: DataTypes.STRING(255),
      allowNull: false,
      default: false
    },
  }, {
    tableName: 'Notification'
  });

  notification.associate = function (models) {
    notification.belongsTo(models.orders, {
      foreignKey: "id",
      as: "order_id"
    });
  };

  return Notification;
};
