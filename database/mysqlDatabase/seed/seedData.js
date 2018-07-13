const { list, todo } = require('../models.js');

const listData = [
  {
    name: 'To Do List',
  },
];

const todoData = [
  {
    name: 'Cook dinner',
    list_name: 'To Do List'
  },
  {
    name: 'Clean house',
    list_name: 'To Do List'
  },
  {
    name: 'Watch TV',
    list_name: 'To Do List'
  },
  {
    name: 'Sleep',
    list_name: 'To Do List'
  },
];

list.sync({ force: false }).then(() => {
  list.bulkCreate(listData).then(() => {
    todo.sync({ force: false }).then(() => {
      todo.bulkCreate(todoData).then(() => {
          console.log('lists & todos seeded');
      });
    });
  });
});