const { Sequelize, DataTypes } = require('sequelize');

const{db} = require('../db')

const User = db.define('User', {

  id : {
    type : DataTypes.INTEGER,
    primaryKey : true,
    autoIncrement: true
    

  },
  firstName: {
    type: DataTypes.STRING,
    //allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    //allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    //allowNull: false,
  },
});



module.exports = User;
