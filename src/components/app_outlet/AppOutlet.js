import React from 'react';
import { Outlet } from 'react-router-dom';

/**
 * Common UI wrapper for <MasterTodo> and <DetailTodo>
 */
export default function AppOutlet() {
  return (
    <div className='container'>
      <div className='row d-flex justify-content-center'>
        <div className='col-md-8'>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
