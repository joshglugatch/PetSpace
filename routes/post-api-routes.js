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
        include: [db.User, db.Comment, db.Like]
      }).then(function(result) {
        res.json(result);
      });
    });
  
    // Get route for retrieving a single post
    app.get("/api/posts/:id", function(req, res) {
      db.Post.findOne({
        where: {
          id: req.params.id
        },
        include: [db.User]
      }).then(function(result) {
        console.log(result);
        res.json(result);
      });
    });
  
    // POST route for saving a new post
    app.post("/api/posts", function(req, res) {
      db.Post.create(req.body).then(function(result) {
        res.json(result);
      });
    });
  

    app.get("/api/comments/:postID", function(req, res) { 
      db.Comment.findAll({where: {
        postID: req.params.postID
      }}).then(function(result) {
        res.json(result);
      });
    });



  };