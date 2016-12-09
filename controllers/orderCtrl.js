var app = require('../server');
var db = app.get('db');

module.exports = {
  addToCart: function(req, res, next) {
    db.orders.findOne({userid: req.body.user, checkout: false}, function(err, orderFound) {
      if (orderFound) {
        db.orderitem.insert({orderid: orderFound.id, productid: req.body.product.id, quantity: 1}, function(err, orderitem) {
          if(err) return res.status(500).json(err);
          return res.status(201).json(orderitem);
        });
      } else {
        db.orders.insert({userid: req.body.user}, function(err, order) {
          db.orderitem.insert({orderid: order.id, productid: req.body.product.id, quantity: 1}, function(err, orderitem) {
            if(err) return res.status(500).json(err);
            return res.status(201).json(orderitem);
          });
        });
      }
    });
  },
  getCart: function(req, res, next) {
    db.get_cart([req.params.id], function(err, cart) {
      console.log(cart);
      if(err) return res.status(500).json(err);
      return res.status(201).json(cart);
    });
  },
  removeItem: function(req, res, next) {
    db.remove_item([req.params.orderItemId], function(err, deletedItem) {
      if (err) return res.status(500).json(err);
      db.get_cart([req.params.userId], function(err, cart) {
        if (err) return res.status(500).json(err);
        return res.status(200).json(cart);
      });
    });
  },
  checkout: function(req, res, next) {
    db.checkout([req.params.orderId], function(err, updatedCart) {
      if (err) return res.status(500).json(err);
      db.get_cart([req.params.userId], function(err, cart) {
        if (err) return res.status(500).json(err);
        return res.status(200).json(cart);
      });
    });
  }
};
