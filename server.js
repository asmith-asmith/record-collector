// Basics 
var express = require('express');
var path = require('path');
var logger = require('morgan');
var favicon = require('serve-favicon');

/*--- Spot for database ---*/
require('./config/database');

/*--- Spot for recordRouter ---*/
var recordRouter = require('./routes/api/records');

// more basics
var app = express();

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

/*--- Spot for api routes ---*/
app.use('/api/records', recordRouter);
/*--- Spot for catch all route ---*/
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
  
// set up listen on different port 
const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app listening on port ${port}`);
});