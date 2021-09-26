var express = require('express');
var bodyParser = require("body-parser");
const mongoose = require('mongoose');
var path = require('path');
var logger = require('morgan');
var index = require('./routes/index');
var app = express();

// DB Config
const db = require('./config/keys').mongoURI;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));



// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// set path for static assets
app.use(express.static(path.join(__dirname, 'public')));


// routes
app.use('/', index);
app.use('/api', require('./routes/api'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // render the error page
  res.status(err.status || 500);
  res.render('error', {status:err.status, message:err.message});
});

module.exports = app;
