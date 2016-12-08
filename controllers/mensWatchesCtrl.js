var app = require('../server');
var db = app.get('db');

module.exports = {
  getMensWatches: function(req, res, next) {
    db.get_mens_watches([], function(err, watches) {
      if (err) return res.status(500).json(err);
      return res.status(200).json(watches);
    });
  }

};
