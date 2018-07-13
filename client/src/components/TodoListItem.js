import React from 'react';

const TodoListItem = (props) =>
  <div>
    <button onClick={() => props.deleteTodo(props.todo.name)}>&#10004;</button>{' '}
    {props.todo.name}
  </div>

export default TodoListItem;