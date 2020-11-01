// Requiring our models
var db = require("../models");
var passport = require("../config/passport");

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

    app.get("/api/user/:id", function(req, res) {
      
      db.Post.findAll({
        where: {UserId: req.params.id},
        include: [db.User, db.Like, {model: db.Comment, include: [db.User]}]
      }).then(function(result) {
        res.json(result);
      });
    });

    // POST new comments
    app.post("/api/comment", function(req, res) {
      db.Comment.create({
        comment: req.body.comment,
        UserId: req.body.UserId,
        PostId: req.body.PostId
      }).then(function(results) {
        res.json(results);
      });
    });


    app.post("/api/login", passport.authenticate("local"), function(req, res) {
      res.json(req.user);
    });

    app.get("/api/user_data", function(req, res) {
      if (!req.user) {
        // The user is not logged in, send back an empty object
        res.json({});
      } else {
        // Otherwise send back the user's email and id
        // Sending back a password, even a hashed password, isn't a good idea
        res.json({
          username: req.user.username,
          id: req.user.id
        });
      }
    });

    
  
  
  };