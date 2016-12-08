var app = require('../server');
var db = app.get('db');

module.exports = {
  getMensWatches: function(req, res, next) {
    db.get_mens_watches([], function(err, watches) {
      if (err) return res.status(500).json(err);
      return res.status(200).json(watches);
    });
  },

  getMensLeather: function(req, res, next) {
    db.get_mens_leather([], function(err, watches) {
      if (err) return res.status(500).json(err);
      return res.status(200).json(watches);
    });
  },

  getMensStainless: function(req, res, next) {
    db.get_mens_stainless([], function(err, watches) {
      if (err) return res.status(500).json(err);
      return res.status(200).json(watches);
    });
  },

  getMensSilicone: function(req, res, next) {
    db.get_mens_silicone([], function(err, watches) {
      if (err) return res.status(500).json(err);
      return res.status(200).json(watches);
    });
  }

};
