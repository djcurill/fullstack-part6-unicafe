import { createStore } from 'redux';
import { counterReducer } from './reducer';

const store = createStore(counterReducer, undefined);

export default store;
