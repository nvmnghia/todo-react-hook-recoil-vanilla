import React from 'react';

import AddTodo from './add_todo/AddTodo';
import TodoList from './todo_list/TodoList';

export default function MasterTodo(props) {
  return (
    <>
      <div className='row mt-4'>
        <h2>TODO</h2>
      </div>

      <AddTodo />

      <TodoList
        todos={props.todos}
        remove={props.removeTodo}
        edit={props.editTodo}
      />
    </>
  );
}
