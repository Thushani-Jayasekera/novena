const express = require('express');
const cors = require("cors");
const http = require('http');
const helmet = require('helmet');
const sequelize = require("./config/database");

/* Make all variables from our .env file available in our process */
require('dotenv').config();

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });

const hostname = 'localhost';
const port = 5000;

const app = express();

app.use(express.static('public'));
app.use(require('./middlewares/request-logger'));

const routes = require('./routes/index');
const bodyParser = require('body-parser');

// parse JSON requests in the body of an HTTP request
app.use(express.json());

// enables Express application to handle incoming POST requests that contain data in the x-www-form-urlencoded format.
app.use(express.urlencoded({
    extended: true
}));

/* Init helmet and CORS */
app.use(helmet({ contentSecurityPolicy: false }));

/* set view engine */
app.set('view engine', 'ejs');

// middleware parses the JSON data that is sent with the request and makes it available in the req.body
app.use(bodyParser.json());

app.use('/', routes);


/* Listen on the port for requests */
app.listen( process.env.PORT || 3000, () => {
    console.log('Express server listening on port %d in %s mode', process.env.PORT, app.settings.env);
});