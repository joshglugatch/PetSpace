module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      // Giving the User model a name of type STRING
      name: DataTypes.STRING
    });
  
    User.associate = function(models) 
    {
      User.hasMany(models.Post) 
      User.hasMany(models.Comment) 
      User.hasMany(models.Like) 
      
    };
  
    return User;
  };