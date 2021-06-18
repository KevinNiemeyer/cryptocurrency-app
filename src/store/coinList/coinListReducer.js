const initialState = {
  coinList: [],
};

function coinListReducer(state = initialState, action) {
  switch (action.type) {
    case 'COINLIST_FETCH_ALL_COINS_SUCCESS':
      return {
        ...state, //whatever it used to be in state
        coinList: [...state.coinList, ...action.payload],
      };
  }
  return state;
}

export default coinListReducer;
