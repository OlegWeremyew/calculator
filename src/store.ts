import { combineReducers, createStore } from 'redux';

import { calculatorReducer, historyReducer, themeReducer } from './reducers';

export type AppRootStateType = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  calculator: calculatorReducer,
  history: historyReducer,
  theme: themeReducer,
});

export const store = createStore(rootReducer);

export type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type InferActionTypes<T extends { [key: string]: (...args: any[]) => any }> =
  ReturnType<PropertiesTypes<T>>;
