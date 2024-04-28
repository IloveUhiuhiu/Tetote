const express = require('express');
const bodyParser = require('body-parser');
const consign = require('consign');
const cors = require('cors');
const path = require('path');

/* Configure express */
const app = express();

/* Configure body-parser */
app.use(bodyParser.urlencoded({ extended : true }))
app.use(bodyParser.json());

/* Configure cors */
app.set('secret', 'api-nodejs');

/* configure consign */
consign()
    .include('config/database.js')
    .then('app/routes')
    .then('app/controllers')
    .into(app);

module.exports = app;

