const express = require('express');

//const HOST = '0.0.0.0';

var env = process.env.ENVIRONMENT || 'preprod';

const app = express();
var envConfig = require('./environment')[env];

require('./config/express').get(app, envConfig);
require('./routes').get(app, envConfig);

