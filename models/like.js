module.exports = function(sequelize, DataTypes) {
    var Like = sequelize.define("Like", {
      like: {
         type: DataTypes.BOOLEAN,
         defaultValue: false
      }
    });
  
    Like.associate = function(models) {
      Like.belongsTo(models.Post, {foreignKey: { allowNull: false }})
      Like.belongsTo(models.User, {foreignKey: { allowNull: false }})
      
    };
  
    return Like;
  };