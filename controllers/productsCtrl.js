var app = require('../server');
var db = app.get('db');

module.exports = {
  getProducts: function(req, res, next) {
    db.get_products([], function(err, products) {
      if (err) return res.status(500).json(err);
      return res.status(200).json(products);
    });
  }

};
