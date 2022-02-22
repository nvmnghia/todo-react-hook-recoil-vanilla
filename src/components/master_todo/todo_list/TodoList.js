import React from 'react';

import TodoItem from './todo_item/TodoItem';
import EmptyList from './EmptyList';

export default function TodoList({ todos }) {
  return (
    <div className='row mt-4'>
      <div className='col'>
        {todos.length === 0 ? (
          <EmptyList />
        ) : (
          todos.map((todo) => <TodoItem id={todo.id} key={todo.id} />)
        )}
      </div>
    </div>
  );
}
