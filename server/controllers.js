// const { List, Todo } = require('../database/mongoDatabase/models');

// const db = require('../database/mysqlDatabase/models');

const controller = {
  get: (req, res) => {
    console.log(req.query)
    const { listName } = req.query;

    //mongodb
    // Todo.find({
    //   list_name: listName,
    // }, (err, todos) => {
    //   if (err) { console.error(err) }
    //   else { res.status(200).send(todos) }
    // })

    //mysql
    // db.todo.findAll({
    //   where: { list_name: listName }
    // })
    // .then(todos =>{
    //   if (todos) { res.status(200).send(todos) }
    //   else { res.status(404).send('List aint here')}
    // })
    // .catch(err => console.error(err))
  },
  post: (req, res) => {
    //do something
    const { name, list_name } = req.body;
    // new Todo({
    //   name: name,
    //   list_name: list_name
    // }).save((err, newTodo) => {
    //   if (err) { console.error(err) }
    //   else { res.status(201).send(newTodo) }
    // })

    //mysql
    // db.todo.create({
    //   name,
    //   list_name
    // })
    // .then(todo => {
    //   res.status(201).send(todo)
    // })
    // .catch(err => console.error(err))
  },
  delete: (req, res) => {
    const { todo } = req.query;
    // Todo.remove({
    //   name: todo
    // }, (err, deleted) => {
    //   if (err) { console.error(err) }
    //   else { res.status(202).send('deleted') }
    // })

    //mysql
    // db.todo.destroy({
    //   where: { name: todo }
    // })
    // .then(() => {
    //   res.status(202).send('deleted')
    // })
    // .catch(err => console.error(err))
  }
}

module.exports = controller;