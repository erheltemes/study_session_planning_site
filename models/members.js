//members.js

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Members extends Model {}

Members.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
      }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [6],
      }
    },
    display_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
    type: DataTypes.STRING,
    allowNull: faglse,
    },

    // picture: {
    //     type: DataTypes.STRING,               //doubt
    //     allowNull: false,
    // },

    notes_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'notes',
            key: 'id'
        }
    },
    sessions_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'sessions',
            key: 'id'
        }
    },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'members',
  }
);

module.exports = Members;
