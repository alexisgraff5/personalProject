var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
//var config = require('./config.js');
var massive = require('massive');
var connectionString = process.env.connectionString;

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
var orderCtrl = require('./controllers/orderCtrl.js');


app.use(session({
  secret: process.env.sessionSecret,
  saveUninitialized: false,
  resave: false
}));

app.post('/login', userCtrl.loginUser);
app.post('/register', userCtrl.registerUser);
app.get('/mens-watches', mensWatchesCtrl.getMensWatches);
app.get('/mens-comp', mensWatchesCtrl.getMensComp);
app.get('/mens-corp', mensWatchesCtrl.getMensCorp);
app.get('/mens-driver', mensWatchesCtrl.getMensDriver);
app.get('/mens-rollo', mensWatchesCtrl.getMensRollo);
app.get('/mens-material-leather', mensWatchesCtrl.getMensLeather);
app.get('/mens-material-stainless', mensWatchesCtrl.getMensStainless);
app.get('/mens-material-silicone', mensWatchesCtrl.getMensSilicone);
app.get('/womens-watches', womensWatchesCtrl.getWomensWatches);
app.get('/womens-kenzi', womensWatchesCtrl.getWomensKenzi);
app.get('/womens-gi', womensWatchesCtrl.getWomensGi);
app.get('/womens-material-leather', womensWatchesCtrl.getWomensLeather);
app.get('/womens-material-stainless', womensWatchesCtrl.getWomensStainless);
app.get('/womens-material-nylon', womensWatchesCtrl.getWomensNylon);
app.post('/cart', orderCtrl.addToCart);
app.get('/cart/:id', orderCtrl.getCart);
app.delete('/cart/:userId/:orderItemId', orderCtrl.removeItem);
app.put('/cart/:userId/:orderId', orderCtrl.checkout);

app.listen(process.env.port, function() {
  console.log('listening to port', config.port);
});
