const Sequelize = require('sequelize')

const Tedious = require('tedious')


// go to sql server configuration and add port numbers by manual


module.exports.db = new Sequelize("test","sa","Test@123",{
host:`localhost`,
port:1433 ,
dialect:"mssql",
dialectModule:Tedious,
logging:false
})
