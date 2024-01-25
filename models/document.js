const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const PrintInfo = require("./printing-info-model");
const Signature = require("./signature-model");

const DocumentModel = sequelize.define('Documents', {
  document_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  file_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  folder_id: {
    type: DataTypes.STRING,
  },
  
  print_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'printing_info',
      key: 'print_id',
    },
  },
  sign1_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'signatures',
      key: 'signature_id',
    },
  },
  sign2_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'signatures',
      key: 'signature_id',
    },
  },
  sign3_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'signatures',
      key: 'signature_id',
    },
  },
  sign4_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'signatures',
      key: 'signature_id',
    },
  },
  status: {
    type: DataTypes.ENUM('pending', 'awaiting_signatures', 'signed'),
    defaultValue: 'pending',
    allowNull: false
  },
  signature_count_needed: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
}, {
  tableName: 'documents',
  timestamps: false,
});


  DocumentModel.belongsTo(PrintInfo, { foreignKey: 'print_id' });
  DocumentModel.belongsTo(Signature, { foreignKey: 'sign1_id' });
  DocumentModel.belongsTo(Signature, { foreignKey: 'sign2_id' });
  DocumentModel.belongsTo(Signature, { foreignKey: 'sign3_id' });
  DocumentModel.belongsTo(Signature, { foreignKey: 'sign4_id' });

module.exports = DocumentModel;
