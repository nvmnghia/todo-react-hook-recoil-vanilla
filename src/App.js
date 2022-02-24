import React, { useEffect } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { todoIdsState } from './recoil/todoState';
import { initializeCounter } from './Todo';
import AppOutlet from './components/app_outlet/AppOutlet';
import MasterTodo from './components/master_todo/MasterTodo';
import DetailTodo from './components/detail_todo/DetailTodo';
import NotFound from './components/NotFound';

function App() {
  const todoIds = useRecoilValue(todoIdsState);

  useEffect(initializeCounter, []);

  // Links
  const links = todoIds.map((id) => (
    <Route path={`${id}`} element={<DetailTodo id={id} />} key={id} />
  ));

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppOutlet />}>
          <Route path='' element={<MasterTodo />} />
          <Route path='todo'>{links}</Route>
        </Route>

        {/* Route order doesn't seem to affect paths match, which is good */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
