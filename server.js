const express = require('express');
const dayjs = require("dayjs");
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(8080);