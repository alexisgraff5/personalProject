var app = require('../server');
var db = app.get('db');

module.exports = {
  getWomensWatches: function(req, res, next) {
    db.get_womens_watches([], function(err, watches) {
      if (err) return res.status(500).json(err);
      return res.status(200).json(watches);
    });
  },

  getWomensKenzi: function(req, res, next) {
    db.get_womens_kenzi([], function(err, watches) {
      if (err) return res.status(500).json(err);
      return res.status(200).json(watches);
    });
  },

  getWomensGi: function(req, res, next) {
    db.get_womens_gi([], function(err, watches) {
      if (err) return res.status(500).json(err);
      return res.status(200).json(watches);
    });
  },

    getWomensLeather: function(req, res, next) {
      db.get_womens_leather([], function(err, watches) {
        if (err) return res.status(500).json(err);
        return res.status(200).json(watches);
      });
    },

    getWomensStainless: function(req, res, next) {
      db.get_womens_stainless([], function(err, watches) {
        if (err) return res.status(500).json(err);
        return res.status(200).json(watches);
      });
    },

    getWomensNylon: function(req, res, next) {
      db.get_womens_nylon([], function(err, watches) {
        if (err) return res.status(500).json(err);
        return res.status(200).json(watches);
      });
    }
};
