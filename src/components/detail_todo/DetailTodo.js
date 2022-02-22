import React from 'react';

import TodoItem from '../master_todo/todo_list/todo_item/TodoItem';

export default function DetailTodo({ id }) {
  return (
    <>
      <div className='row mt-4'>
        <h3>Todo #{id}</h3>
      </div>

      <TodoItem id={id} />
    </>
  );
}
