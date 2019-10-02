const express = require('express');

var env = process.env.ENVIRONMENT || 'preprod';

const app = express();
var envConfig = require('./environment')[env];

require('./config/express').get(app, envConfig);
require('./routes').get(app);

module.exports = app;
