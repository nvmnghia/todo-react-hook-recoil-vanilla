import React from 'react';

import TodoItem from './todo_item/TodoItem';
import EmptyList from './EmptyList';

export default function TodoList({ todos, remove, edit }) {
  return (
    <div className='row mt-4'>
      <div className='col'>
        {todos.length === 0 ? (
          <EmptyList />
        ) : (
          todos.map((todo) => (
            <TodoItem todo={todo} key={todo.id} remove={remove} edit={edit} />
          ))
        )}
      </div>
    </div>
  );
}
