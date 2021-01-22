const express = require('express');
const cors = require('cors');


const app = express();

app.use(cors());
app.options('*',cors());
app.use(express.json());

app.use('/api',require('./route/api'));
module.exports = app;
