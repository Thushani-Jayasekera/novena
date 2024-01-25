const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Role = sequelize.define('Role', {
  role_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'roles',
  timestamps: false
});


module.exports = Role;
