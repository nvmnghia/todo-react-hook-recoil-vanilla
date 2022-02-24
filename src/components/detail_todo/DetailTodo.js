import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRecoilValue } from 'recoil';
import { todoListState } from '../../recoil/todoState';

import TodoItem from '../master_todo/todo_list/todo_item/TodoItem';

const truncate = (str, len = 25) =>
  str.length <= len ? str : `${str.substring(0, len - 1)}...`;

export default function DetailTodo({ id }) {
  const todo = useRecoilValue(todoListState(id));
  if (!todo) {
    throw new Error('We fucked up somewhere');
  }

  useEffect(() => {
    document.title = `#${todo.id}: ${truncate(todo.content)}`;
  }, [todo]);

  return (
    <>
      <div className='row mt-4'>
        <h3>Todo #{id}</h3>
      </div>

      <TodoItem id={id} />
    </>
  );
}

DetailTodo.propTypes = {
  id: PropTypes.number,
};
