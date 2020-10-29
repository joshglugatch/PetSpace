var db = require("../models");

module.exports = function(app) {
    
    app.get("/api/users", function(req, res) {
      db.User.findAll({}).then(function(result) {
        res.json(result);
      });
    });
  
    app.get("/api/users/:id", function(req, res) {
      
      db.User.findOne({
        where: {
          id: req.params.id
        }
      }).then(function(result) {
        res.json(result);
      });
    });
  
    app.post("/api/users", function(req, res) {
      
      console.log(req.body);
      db.User.create(req.body).then(function(result) {
        res.json(result);
      });
    });
  
  };
  