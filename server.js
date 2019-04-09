const express = require("express");
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

mongoose.connect('mongodb://localhost/orutry', {
  useNewUrlParser: true
});

app.use("/api", require('./routes/api/test.js'));

app.listen(port);
