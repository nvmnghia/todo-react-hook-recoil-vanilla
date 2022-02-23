import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useRecoilValue, useSetRecoilState } from 'recoil';
import { todoListState, todoOfId } from '../../../../recoil/todoState';

import {
  EditButton,
  RemoveButton,
  SaveButton,
  UndoButton,
} from './TodoItemButtons';
import { TodoContent, TodoEditor } from './TodoItemContent';

const LinkTodo = ({ todoId, ...props }) => (
  <Link className='text-muted' to={`/todo/${todoId}`} {...props}>
    {props.children}
  </Link>
);

const TodoItem = ({ id }) => {
  const navigate = useNavigate();

  const setTodos = useSetRecoilState(todoListState);
  const todo = useRecoilValue(todoOfId(id));
  if (!todo) {
    throw new Error('We fucked up somewhere');
  }

  // Editing state: toggles textarea and changes buttons
  // - In editing mode: Save, Undo, Remove buttons
  // - Otherwise: Edit & Remove buttons
  const [editing, setEditing] = useState(false);
  const toggleEditing = () => setEditing((editingState) => !editingState);

  // Temp content of textarea (controlled form)
  const [tmpContent, setTmpContent] = useState(todo.content);

  const save = (content) => {
    setTodos((todos) =>
      [{id, content, date: new Date(), ...todos.filter((_todo) => _todo.id !== id)}]
    );
  };

  const remove = () => {
    setTodos((_todos) => _todos.filter((_todo) => _todo.id !== id));

    navigate('/');
  };

  const contentBox = editing ? (
    <TodoEditor tmpContent={tmpContent} onChange={setTmpContent} />
  ) : (
    <TodoContent content={todo.content} />
  );
  const editOrSaveButton = editing ? (
    <>
      <SaveButton
        onSave={() => {
          toggleEditing();
          save(tmpContent);
        }}
      />
      <UndoButton
        onClick={() => {
          toggleEditing();
          setTmpContent(todo.content);
        }}
      />
    </>
  ) : (
    <EditButton onStartEdit={toggleEditing} />
  );

  return (
    <div className='p-2 mb-2 border border-1 rounded-3'>
      <div className='d-flex align-items-start gap-2 mb-2'>
        <div className='align-self-center pe-2'>
          <LinkTodo todoId={todo.id}>{todo.id}</LinkTodo>
        </div>

        <div className='flex-grow-1 align-self-center'>
          <LinkTodo tabIndex={-1} todoId={todo.id}>
            {todo.date.toLocaleString()}
          </LinkTodo>
        </div>

        {editOrSaveButton}

        <RemoveButton onRemove={remove} />
      </div>
      {contentBox}
    </div>
  );
};

export default TodoItem;
