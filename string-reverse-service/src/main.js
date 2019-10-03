const express = require('express');

const app = express();

require('./config/express').get(app);
require('./routes').get(app);

module.exports = app;
