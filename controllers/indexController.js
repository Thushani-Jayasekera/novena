
const UserService = require('../services/indexService.js');
const { signIn } = require('./util.js');
const userService= new UserService();
class IndexController{

    static async getIndexPage(req, res) {
        res.render('index', {
            userPin:'12345'
        });
    }

    static async connectToDrive(req, res) {


        const registeredUsers = await userService.findUsersByname();
        //console.log(results);

        res.render('connect', {

            registeredUsers,
        });
    }

    static async getActiveFolder(req, res) {
        res.render('active', {
            
        });
    }

    static async getHistoryFolder(req, res) {
        res.render('history', {
            
        });
    }

    static async getRegulatoryFolder(req, res) {
        res.render('working', {
            
        });
    }

    static async getTrainingFolder(req, res) {
        res.render('training', {
            
        });
    }

    static async getWIPFolder(req, res) {
        res.render('wip', {
            
        });
    }

}
module.exports = IndexController;