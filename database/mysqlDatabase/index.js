const mysql = require('mysql')
const Sequelize = require('sequelize');

const connection = new Sequelize('todo_list', 'root', 'pokemon123', {
  host: 'localhost',
  dialect: 'mysql'
}) 

connection.authenticate()
  .then(() => console.log('mysql is up and running'))
  .catch(err => console.error(err))

module.exports = connection;