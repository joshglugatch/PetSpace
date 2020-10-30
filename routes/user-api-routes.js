var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
    
    app.get("/api/users", function(req, res) {
      db.User.findAll({include: [db.Post]}).then(function(result) {
        res.json(result);
      });
    });
  
    app.get("/api/users/:id", function(req, res) {
      
      db.User.findOne({
        where: {
          id: req.params.id
        },
        include: [db.post]
      }).then(function(result) {
        res.json(result);
      });
    });

    app.post("/api/login", passport.authenticate("local"), function(req, res) {
      res.json(req.user);
    });

    app.post("/api/signup", function(req, res) {
      db.User.create({
        username: req.body.username,
        password: req.body.password
      })
        .then(function() {
          res.redirect(307, "/api/login");
        })
        .catch(function(err) {
          res.status(401).json(err);
        });
    });
  
    app.get("/logout", function(req, res) {
      req.logout();
      res.redirect("/");
    });

    app.post("/api/users", function(req, res) {
      console.log(req.body);
      db.User.create(req.body).then(function(result) {
        res.json(result);
      });
    });
  
  };
  