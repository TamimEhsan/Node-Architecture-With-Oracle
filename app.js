const express = require('express');
const app = express();

const cors = require('cors');


app.use(cors());
app.options('*',cors());
app.use(express.json());

// DO VERSIONING STUFFS HERE
app.use('/api',require('./route/api'));

module.exports = app;
