module.exports = function(sequelize, DataTypes) {
    var Comment = sequelize.define("Comment", {
      comment: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1-200]
        }
      },
      imageURL: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      animal: {
        type: DataTypes.STRING,
        defaultValue: "Other"
      }
    });
    return Comment;
  };
  