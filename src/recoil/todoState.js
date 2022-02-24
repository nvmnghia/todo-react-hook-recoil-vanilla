import { atom, atomFamily, selector } from 'recoil';
import { initialTodos } from '../data_loading/data_loading';

export const todoIdsState = atom({
  key: 'todoIdsState',
  default: initialTodos.then((todos) => todos.map((todo) => todo.id)),
});

export const numOfTodosState = selector({
  key: 'numOfSelector',
  get: ({ get }) => get(todoIdsState).length,
});

export const todoListState = atomFamily({
  key: 'todoListState',
  default: (
    id // TODO: somehow move this outside, as now EVERY NEW todo will search the initial array
  ) => initialTodos.then((todos) => todos.find((todo) => todo.id === id)),
});
