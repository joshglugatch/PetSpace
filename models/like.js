module.exports = function(sequelize, DataTypes) {
    var Like = sequelize.define("Like", {
      like: {
         type: DataTypes.BOOLEAN,
         defaultValue: false
      }
    });
  
    Like.associate = function(models) {
      Like.belongsTo(models.Post, models.User);
    };
  
    return Like;
  };