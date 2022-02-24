import { initializeCounter, todosFromJSON } from './Todo';

const ITEM_KEY = 'todos';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const loadFromLocalStorage = async () => {
  await sleep(Math.random() * 1234);
  if (Math.random() < 0.3) {
    throw Error('BOMBAYAH');
  }

  initializeCounter();

  const json = localStorage.getItem(ITEM_KEY);
  if (json === null) {
    return [];
  }

  return todosFromJSON(json);
};

const saveToLocalStorage = (todos) => {
  localStorage.setItem(ITEM_KEY, JSON.stringify(todos));
};

export { loadFromLocalStorage, saveToLocalStorage };

const COUNTER_KEY = 'todo-counter';

const getCounter = () => {
  const counterStr = localStorage.getItem(COUNTER_KEY);
  return counterStr ? parseInt(counterStr) : undefined;
};

const setCounter = (counter) => {
  localStorage.setItem(COUNTER_KEY, counter.toString());
};

export { getCounter, setCounter };
