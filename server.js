var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var config = require('./config.js');
var massive = require('massive');
var connectionString = "postgres://postgres@localhost/nixon_mini_clone";

var app = module.exports = express();

var massiveInstance = massive.connectSync({connectionString : connectionString});

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(cors());

app.set('db', massiveInstance);

var db = app.get('db');
var userCtrl = require('./controllers/userCtrl');
var productsCtrl = require('./controllers/productsCtrl');


app.use(session({
  secret: config.sessionSecret,
  saveUninitialized: false,
  resave: false
}));

app.post('/login', userCtrl.loginUser);

app.get('/products', productsCtrl.getProducts);

app.listen(config.port, function() {
  console.log('listening to port', config.port);
});
