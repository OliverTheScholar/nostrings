const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const PORT = 3000;

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../src/index.html'));
  });


// app.get('/login', (req, res) => {
//     return res.status(200).sendFile(path.join(__dirname, '../src/login.html'));
// })


app.listen(PORT);