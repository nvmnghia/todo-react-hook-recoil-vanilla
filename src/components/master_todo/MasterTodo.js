import React from 'react';

import AddTodo from './add_todo/AddTodo';

export default function MasterTodo(props) {
  return (
    <>
      <div className='row mt-4'>
        <h2>TODO</h2>
      </div>

      <AddTodo add={props.addTodo} />
    </>
  );
}
