var bcrypt = require("bcryptjs");

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {len:[8,30]}
    }
    });
  
    User.associate = function(models) 
    {
      User.hasMany(models.Post) 
      User.hasMany(models.Comment) 
    };
  
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.addHook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  return User;
};