module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: " ",
      validate: {
        len: [0-150]
      }
    },
    imageURL: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    animal: {
      type: DataTypes.STRING,
      defaultValue: "Other"
    },
 
  });

  Post.associate = function(models) {
      Post.belongsTo(models.User, {foreignKey: { allowNull: false }})

      Post.hasMany(models.Comment) 
      Post.hasMany(models.Like)


  }


  return Post;
};
