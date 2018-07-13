const Sequelize = require('sequelize');
const connection = require('./index.js');

const list = connection.define('list', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, { timestamps: false })

const todo = connection.define('todo', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  list_name: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, { timestamps: false });

connection.sync({ force: false })
  .then(() => console.log('successfully synced mysql database'))
  .catch(err => console.log('mysql databse failed'))

module.exports = {
  list,
  todo
}