const initialState = {
  coinData: null,
  isLoading: false,
  hasError: false,
};

function coinPageReducer(state = initialState, action) {
  switch (action.type) {
    case 'COINPAGE_FETCH_COIN_DATA_SUCCESS':
      console.log('action: ', action.type);
      console.log('state: ', state);
      console.log('payload: ', action.payload);
      return {
        ...state, // all of whatever is currently in state
        coinData: [...state.coinData, ...action.payload], //we're not changing all of state, just coinList, so that's why we had to spread the rest of state
      }; //why don't I have to use action.payload.data?

    default:
      return state;
  }
}

export default coinPageReducer;
