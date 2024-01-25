const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const { hash, genSaltSync, compare } =require("bcrypt");
const Role = require("./role");

const User = sequelize.define('User',{
    user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    signature: {
        type: DataTypes.STRING,
        allowNull: true
    },
    role_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'roles',
            key: 'role_id',
        },
    },
},{
    tableName:'users',
    timestamps: false
});

User.belongsTo(Role, { foreignKey: 'role_id' });
console.log(User === sequelize.models.User); 


module.exports = User;
