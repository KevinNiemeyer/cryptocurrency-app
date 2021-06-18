import { compose, combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import coinList from './coinList/coinListReducer'; //default export. "coinList" can be any name you want
const reducers = combineReducers({
  coinList,
});

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

export default createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
