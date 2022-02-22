import { atom, selectorFamily } from 'recoil';

import { loadFromLocalStorage } from '../local_storage';

export const todoListState = atom({
  key: 'todoListState',
  default: loadFromLocalStorage(),
});

export const todoOfId = selectorFamily({
  key: 'todoOfId',
  get:
    (id) =>
    ({ get }) =>
      get(todoListState).find((todo) => todo.id === id),
});
