var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var config = require('./config.js');

var app = express();

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());

app.use(cors(corsOptions));

// app.use(session({
//   secret: config.sessionSecret,
//   saveUninitialized: false,
//   resave: false
// }));

app.listen(config.port, function() {
  console.log('listening to port', config.port);
});
