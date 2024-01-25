const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const PrintInfo = sequelize.define('PrintInfo', {
  print_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  printed_by: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
    references: {
      model: "User",
      key: "user_id"
    }
  },
  printed_at: {
    type: DataTypes.DATE,
    primaryKey: true,
    allowNull: false
  }
},
{
  tableName: 'printing_info',
  timestamps: false,
});

PrintInfo.associate = (models) => {
  PrintInfo.belongsTo(models.User, { foreignKey: 'printed_by' });
}
module.exports = PrintInfo;
