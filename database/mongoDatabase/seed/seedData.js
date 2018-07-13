const { List, Todo } = require('../models')

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
// const something = () => {
  new List({
    name: listData[0].name
  }).save((err, newList) => {
    if (err) { console.error(err) }
    else {
      todoData.forEach(todo => {
        new Todo({
          name: todo.name,
          list_name: todo.list_name
        }).save((err, newTodo) => {
          if (err) { console.error(err) }
          else {
            console.log('created: ', newTodo)
          }
        })
      })
    }
  })
// }
// something()
