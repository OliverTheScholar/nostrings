const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const userController = require('../controllers/userController');

const PORT = 3000;

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../src/index.html'));
  });

app.post('/addUser', userController.addUser, (req, res) => {
  return res.status(200).send('successfully added user');
});

app.post('/findUser', userController.findUser, (req, res) => {
  return res.status(200).json(res.locals.result);
});

app.post('/findUserByPk', userController.findUserByPubKey, (req, res) => {
  return res.status(200).json(res.locals.result);
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ error: err });
});

app.listen(PORT, ()=>{ console.log(`Listening on port ${PORT}...`); });