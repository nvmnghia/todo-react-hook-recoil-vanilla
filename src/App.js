import { useEffect } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { todoListState } from './recoil/todoState';

import { saveToLocalStorage } from './local_storage';

import AppOutlet from './components/app_outlet/AppOutlet';
import MasterTodo from './components/master_todo/MasterTodo';
import DetailTodo from './components/detail_todo/DetailTodo';
import NotFound from './components/not_found/NotFound';

function App() {
  // State setup
  const todos = useRecoilValue(todoListState);
  useEffect(() => {
    saveToLocalStorage(todos); // Save if changed
  }, [todos]);

  // Links
  const links = todos.map((todo) => (
    <Route
      path={`${todo.id}`}
      element={<DetailTodo id={todo.id} />}
      key={todo.id}
    />
  ));

  const masterTodo = (
    <MasterTodo todos={todos} />
  )

  return (
  <BrowserRouter>
   <Routes>
    <Route path='/' element={<AppOutlet />}>
      <Route path='' element={masterTodo} />
      <Route path='todo'>{links}</Route>
    </Route>

    {/* Route order doesn't seem to affect paths match, which is good */}
    <Route path='*' element={<NotFound />} />
   </Routes>
  </BrowserRouter>
  );
}

export default App;
