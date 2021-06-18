import { combineReducers, createStore } from 'redux';
import coinList from './coinList/coinListReducer'; //default export. "coinList" can be any name you want
const reducers = combineReducers({
  coinList,
});

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
