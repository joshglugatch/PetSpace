// Requiring our models
var db = require("../models");

module.exports = function(app) {

    // GET route for getting all of the posts
    app.get("/api/posts", function(req, res) {
      var query = {};
      if (req.query.userID) {
        query.userId = req.query.userID;
      }
      db.Post.findAll({
        where: query,
        include: [db.User, db.Like, {model: db.Comment, include: [db.User]}]
      }).then(function(result) {
        res.json(result);
      });
    });
  
  
    // POST route for saving a new post
    app.post("/api/posts", function(req, res) {
      db.Post.create(req.body).then(function(result) {
        res.json(result);
      });
    });

    // GET for specific animal posts
    app.get("/api/posts/:animal", function(req, res) {
      
      db.Post.findAll({
        where: {animal: req.params.animal},
        include: [db.User, db.Like, {model: db.Comment, include: [db.User]}]
      }).then(function(result) {
        res.json(result);
      });
    });
  
  };