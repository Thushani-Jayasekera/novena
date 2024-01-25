require('dotenv').config();

const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const port = process.env.DB_PORT;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_NAME;

module.exports = {
    host,
    user,
    password,
    database,
    port
}