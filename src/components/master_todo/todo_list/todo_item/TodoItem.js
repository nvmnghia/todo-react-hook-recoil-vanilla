import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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

const TodoItem = (props) => {
  const navigate = useNavigate();

  // Editing state: toggles textarea and changes buttons
  // - In editing mode: Save, Undo, Remove buttons
  // - Otherwise: Edit & Remove buttons
  const [editing, setEditing] = useState(false);
  const toggleEditing = () => setEditing((editingState) => !editingState);

  // Temp content of textarea (controlled form)
  const [tmpContent, setTmpContent] = useState(props.todo.content);

  const save = (content) => props.edit(props.todo.id, content);
  const remove = () => {
    props.remove(props.todo.id);
    navigate('/');
  };

  const contentBox = editing ? (
    <TodoEditor tmpContent={tmpContent} onChange={setTmpContent} />
  ) : (
    <TodoContent content={props.todo.content} />
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
          setTmpContent(props.todo.content);
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
          <LinkTodo todoId={props.todo.id}>{props.todo.id}</LinkTodo>
        </div>

        <div className='flex-grow-1 align-self-center'>
          <LinkTodo tabIndex={-1} todoId={props.todo.id}>
            {props.todo.date.toLocaleString()}
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
