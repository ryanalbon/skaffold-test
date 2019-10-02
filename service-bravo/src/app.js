const express = require('express');

const { name, version } = require('../package.json');

const app = express();

app.get('/status', (req, res) => res.status(200).end());

app.get('/hello', (req, res) => res.status(200).json({ message: 'Hello!', from: { name, version } }).end());

module.exports = app;
