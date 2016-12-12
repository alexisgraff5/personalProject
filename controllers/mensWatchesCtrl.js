var app = require('../server');
var db = app.get('db');

module.exports = {
  getMensWatches: (req, res, next) => {
    db.get_mens_watches([], function(err, watches) {
      if (err) return res.status(500).json(err);
      return res.status(200).json(watches);
    });
  },

  getMensComp: (req, res, next) => {
    db.get_mens_comp([], function(err, watches) {
      if (err) return res.status(500).json(err);
      return res.status(200).json(watches);
    });
  },

  getMensCorp: (req, res, next) => {
    db.get_mens_corp([], function(err, watches) {
      if (err) return res.status(500).json(err);
      return res.status(200).json(watches);
    });
  },

  getMensDriver: (req, res, next) => {
    db.get_mens_driver([], function(err, watches) {
      if (err) return res.status(500).json(err);
      return res.status(200).json(watches);
    });
  },

  getMensRollo: (req, res, next) => {
    db.get_mens_rollo([], function(err, watches) {
      if (err) return res.status(500).json(err);
      return res.status(200).json(watches);
    });
  },

  getMensLeather: (req, res, next) => {
    db.get_mens_leather([], function(err, watches) {
      if (err) return res.status(500).json(err);
      return res.status(200).json(watches);
    });
  },

  getMensStainless: (req, res, next) => {
    db.get_mens_stainless([], function(err, watches) {
      if (err) return res.status(500).json(err);
      return res.status(200).json(watches);
    });
  },

  getMensSilicone: (req, res, next) => {
    db.get_mens_silicone([], function(err, watches) {
      if (err) return res.status(500).json(err);
      return res.status(200).json(watches);
    });
  }

};
