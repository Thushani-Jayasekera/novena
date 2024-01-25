const UserModel = require('../models/users.js');
const sequelize = require('../config/database');
const Role = require('../models/role.js');

class UserService {
    constructor() {
        try {
            sequelize.authenticate();
            //console.log('Connection has been established successfully.');
        } catch (error) {
            //console.error('Unable to connect to the database:', error);
        }
    }

    async findUsersByname  () {
        let res = await UserModel.findAll({ include: [{model: Role}], raw: true});
        let users =[]
        res.forEach(function(user){
            users.push(user.username);
            //console.log(user.username,user);
        })
        console.log(users);
        return users;
    }

    async findRole(name) {
        let res = await UserModel.findOne({where:{username: name}, include: [{model:Role}], raw:true});
        console.log(res);
        return res.user.role.role_id;
    }


}

module.exports = UserService;