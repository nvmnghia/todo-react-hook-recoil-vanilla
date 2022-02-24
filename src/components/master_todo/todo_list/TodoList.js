import React from 'react';

import { useRecoilValue } from 'recoil';
import { todoIdsState } from '../../../recoil/todoState';

import TodoItem from './todo_item/TodoItem';
import EmptyList from './EmptyList';

export default function TodoList() {
  const todoIds = useRecoilValue(todoIdsState);
  console.log(todoIds);

  return (
    <div className='row mt-4'>
      <div className='col'>
        {todoIds.length === 0 ? (
          <EmptyList />
        ) : (
          todoIds.map((id) => <TodoItem id={id} key={id} />)
        )}
      </div>
    </div>
  );
}
