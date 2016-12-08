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
var mensWatchesCtrl = require('./controllers/mensWatchesCtrl');
var womensWatchesCtrl = require('./controllers/womensWatchesCtrl');


app.use(session({
  secret: config.sessionSecret,
  saveUninitialized: false,
  resave: false
}));

app.post('/login', userCtrl.loginUser);
app.get('/mens-watches', mensWatchesCtrl.getMensWatches);
app.get('/mens-material-leather', mensWatchesCtrl.getMensLeather);
app.get('/mens-material-stainless', mensWatchesCtrl.getMensStainless);
app.get('/mens-material-silicone', mensWatchesCtrl.getMensSilicone);
app.get('/womens-watches', womensWatchesCtrl.getWomensWatches);
app.get('/womens-material-leather', womensWatchesCtrl.getWomensLeather);
app.get('/womens-material-stainless', womensWatchesCtrl.getWomensStainless);
app.get('/womens-material-nylon', womensWatchesCtrl.getWomensNylon);

app.listen(config.port, function() {
  console.log('listening to port', config.port);
});
