import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { numOfTodosState } from '../../recoil/todoState';

import AddTodo from './add_todo/AddTodo';
import TodoList from './todo_list/TodoList';

export default function MasterTodo() {
  const numOfTodos = useRecoilValue(numOfTodosState);
  useEffect(() => {
    document.title = numOfTodos === 0 ? 'All done' : `${numOfTodos} todos left`;
  }, [numOfTodos]);

  return (
    <>
      <div className='row mt-4'>
        <h2>TODO</h2>
      </div>

      <AddTodo />

      <TodoList />
    </>
  );
}
