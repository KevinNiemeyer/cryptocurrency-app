const initialState = {
  coinList: [],
  sLoading: false,
  hasError: false,
};

function coinListReducer(state = initialState, action) {
  switch (action.type) {
    case 'COINLIST_FETCH_ALL_COINS_SUCCESS':
      return {
        ...state, // all of whatever is currently in state
        coinList: [...state.coinList, ...action.payload], //we're not changing all of state, just coinList, so that's why we had to spread the rest of state
      };
    default:
      return state;
  }
}

export default coinListReducer;
