import React, { Component } from 'react';
import axios from 'axios';
import TodoListItem from './TodoListItem';

class TodoList extends Component {
  constructor(props){
    super(props)
    this.state = {
      todo: '',
      todos: [],
      listName: 'To Do List'
    }
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  componentDidMount() {
    //get data from server
    this.fetchTodos();
  }

  fetchTodos() {
    let option = {
      params: {
        listName: this.state.listName
      }
    }

    axios
      .get('/api/todoList', option)
      .then(result => this.setState({ todos: result.data}))
      .catch(err => console.error(err))
  }

  handleInput(e) {
    this.setState({ todo: e.target.value });
    console.log(this.state.todo)
  }

  handleSubmit(e) {
    e.preventDefault();
    const { todo, todos, listName } = this.state;

    axios
      .post('/api/todoList', { name: todo, list_name: listName })
      .then(() => this.fetchTodos())
      .catch(err => console.log(err))
  }

  deleteTodo(todo) {
    let options = {
      params: {
        todo
      }
    }

    axios
      .delete('/api/todoList', options)
      .then(() => this.fetchTodos())
      .catch(err => console.error(err))
  }

  render() {
    let { todos } = this.state;

    return (
      <div>
        <h1>{this.state.listName}</h1>
          <form onSubmit={e => this.handleSubmit(e)}>
            Add todo: <input onKeyUp={e => this.handleInput(e)} required />
            <button>&#10010;</button>
          </form>
        <br />
        {todos.map((todo, index) =>
          <TodoListItem key={index} index={index} todo={todo} deleteTodo={this.deleteTodo} />
        )}
      </div>
    )
  }
}

export default TodoList;