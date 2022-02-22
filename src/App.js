import { useState, useEffect } from 'react';

import { BrowserRouter } from 'react-router-dom';

import { todoFromContent } from './Todo';
import { loadFromLocalStorage, saveToLocalStorage } from './local_storage';

function App() {
  // State setup
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    setTodos(loadFromLocalStorage()); // Load initial
  }, []);
  useEffect(() => {
    saveToLocalStorage(todos); // Save if changed
  }, [todos]);

  // Edit state
  const addTodo = (content) => {
    // Todo constructor has side effect, thus can't be used inside updater function
    const newTodo = todoFromContent(content);
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };
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

  return (
  <BrowserRouter>
   <div>nothing</div>
  </BrowserRouter>
  );
}

export default App;
