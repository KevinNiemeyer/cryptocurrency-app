Redux notes:

- STORE is just a globalized state
- ACTION is what you want to do with state, i.e.: increment(state)
  - it is a simple function that returns an object
- REDUCER describes how you action transforms the current state into the next state
  -- action is called, the reducer checks which action was called, and then modifys the store based on that action
- DISPATCH - sends the action to the reducer; it dispatches an action (function that returns an object with a type: name), and the reducer looks at what the action name is, and using a switch statement, executes a function on the state under that name
  EX:
  //ACTION:
  const increment = () => {
  return {
  type: 'INCREMENT'
  payload: data
  };
  }

      //DISPATCH:
      store.dispatch(increment());

      //REDUCER:
      const counter = (state = 0, action) => {
          switch(action.type) {
            case 'INCREMENT':
              return state + action.payload;
          }
      };

- You want to keep your actions together in the same folder.
- State goes inside the reducer
- You always create an initial state with every reducer
  - with Redux you always have to return something (from actions)
  - use (state = initialState) in the reducer to create a default state, then update it
- you can wrap the entire <Router></Router> with <Provider></Provider> in App.js, or you can wrap the entire app in index.js (make sure to import Provider from react-redux, store from './store', and pass store to the <Provider store={store}></Provider> component wherever you do it)
- use {connect} from 'react-redux' to connect your component to the redux store
  - connect expects a function that returns an object as the 1st argument, and an object of actions that will change the state as the 2nd argument
  - 1st argument is mapStateToProps, which takes state as the argument (which is the entire redux store)
- now, when you make an api call, you send the data to a reducer via an action
- have to install middleware to do async actions on an API with Redux (using Redux Thunk) because Redux expects every action to happen immediately; import thunk from react-thunk to your store/index.js; also import applyMiddleware from redux
  - combineReducers just takes all your reducers and combines them into one reducer for the store
