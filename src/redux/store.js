import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

// all middlewares can put in this array as a parameter for the applyMiddleware method
const middlewares = [logger] 

const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store