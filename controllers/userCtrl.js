var app = require('../server');
var db = app.get('db');

module.exports = {
  loginUser: function(req, res, next) {
    db.login_user([req.body.email, req.body.password], function(err, user) {
      console.log("Error: ", err, 'User: ', user);
      if (err) return res.status(500).json(err);
      return res.status(200).json(user);
    });
  }
};
