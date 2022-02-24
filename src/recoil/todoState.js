import { atom, atomFamily, selector } from 'recoil';

export const todoIdsState = atom({
  key: 'todoIdsState',
  default: [],
});

export const numOfTodosState = selector({
  key: 'numOfSelector',
  get: ({ get }) => get(todoIdsState).length,
});

export const todoListState = atomFamily({
  key: 'todoListState',
  default: undefined,
});
