import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import rootReducer from './reducers';
import logger from 'redux-logger';
export default function configStore() {
  const store = createStore(
    rootReducer,
    applyMiddleware(promiseMiddleware, logger)
  );
  return store;
}
