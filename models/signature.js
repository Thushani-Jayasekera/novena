const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Signature = sequelize.define('Role', {
  signature_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  signer_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'User',
      key: 'user_id',
    },
  },
  signed_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  signature: DataTypes.STRING,
  comments: DataTypes.STRING,
}, {
  tableName: 'signatures',
  timestamps: false
});

module.exports = Signature;
