import { getCounter, setCounter } from './local_storage';

// ID of the NEXT todo
let todoCounter;
// Wrap calls to anything related to local_storage.ts in a function
// instead of top level call, to avoid circular dependency
// setCounter is wrapped in todoFromContent
export const initializeCounter = () => {
  todoCounter = getCounter() ?? 1;
};

export const nextId = () => todoCounter;

const todoFromContent = (content) => {
  const todo = {
    id: todoCounter,
    content,
    date: new Date(),
  };

  todoCounter++;
  setCounter(todoCounter);

  return todo;
};

const todosFromJSON = (json) => {
  console.log(json);
  return JSON.parse(json).map((tmp) => ({ ...tmp, date: new Date(tmp.date) }));
};

export { todoFromContent, todosFromJSON };
