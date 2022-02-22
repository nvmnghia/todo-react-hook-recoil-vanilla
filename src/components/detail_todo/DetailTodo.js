import React from 'react';

import TodoItem from '../master_todo/todo_list/todo_item/TodoItem';

export default function DetailTodo(props) {
  return (
    <>
      <div className='row mt-4'>
        <h3>Todo #{props.todo.id}</h3>
      </div>

      <TodoItem todo={props.todo} remove={props.remove} edit={props.edit} />
    </>
  );
}
