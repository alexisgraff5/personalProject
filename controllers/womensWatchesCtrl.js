var app = require('../server');
var db = app.get('db');

module.exports = {
  getWomensWatches: function(req, res, next) {
    db.get_womens_watches([], function(err, watches) {
      if (err) return res.status(500).json(err);
      return res.status(200).json(watches);
    });
  },

    getWomensLeather: function(req, res, next) {
      db.get_womens_leather([], function(err, watches) {
        if (err) return res.status(500).json(err);
        return res.status(200).json(watches);
      });
    }
};
