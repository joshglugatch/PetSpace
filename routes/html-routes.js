var path = require('path');

var isAuthenticated = require("../config/isAuthenticated");

module.exports = function(app) {

    app.get("/signup", function(req, res) {
        if (req.user) {
            res.redirect("/members");
        }    
        res.sendFile(path.join(__dirname, "../public/signup.html"));  
    });

    app.get("/", function(req, res) {
        if (req.user) {
          res.redirect("/members");
        }
        res.sendFile(path.join(__dirname, "../public/login.html"));
      });

      app.get("/members", isAuthenticated, function(req, res) {
      res.sendFile(path.join(__dirname, "../public/members.html"));
    });
  };