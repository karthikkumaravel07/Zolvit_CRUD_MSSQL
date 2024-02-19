const { Sequelize, DataTypes } = require('sequelize');
const {db} = require('../db')

// Define your model
const Task = db.define('Task', {
  id : {
    type : DataTypes.INTEGER,
    primaryKey : true,
    autoIncrement: true
  },
  description: {
    type: DataTypes.STRING
   
  },
  completed: {
    type: DataTypes.BOOLEAN
  }
});


module.exports = Task;
