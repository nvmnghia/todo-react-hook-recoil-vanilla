import { useEffect } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { todoListState } from './recoil/todoState';

import { saveToLocalStorage } from './local_storage';

import AppOutlet from './components/app_outlet/AppOutlet';
import MasterTodo from './components/master_todo/MasterTodo';
import DetailTodo from './components/detail_todo/DetailTodo';
import NotFound from './components/not_found/NotFound';

function App() {
  // State setup
  const [todos, setTodos] = useRecoilState(todoListState);
  useEffect(() => {
    saveToLocalStorage(todos); // Save if changed
  }, [todos]);

  // Edit state
  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };
  const editTodo = (id, content) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { id, content, date: new Date() } : todo
      )
    );
  };

  // Links
  const links = todos.map((todo) => (
    <Route
      path={`${todo.id}`}
      element={<DetailTodo todo={todo} remove={removeTodo} edit={editTodo} />}
      key={todo.id}
    />
  ));

  const masterTodo = (
    <MasterTodo todos={todos} removeTodo={removeTodo} editTodo={editTodo} />
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
