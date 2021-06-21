const initialState = {
  coinList: [],
  isLoading: false,
  hasError: false,
};

export const COINLIST_FETCH_ALL_COINS_PENDING =
  'COINLIST_FETCH_ALL_COINS_PENDING';
export const COINLIST_FETCH_ALL_COINS_SUCCESS =
  'COINLIST_FETCH_ALL_COINS_SUCCESS';
export const COINLIST_FETCH_ALL_COINS_ERROR = 'COINLIST_FETCH_ALL_COINS_ERROR';

function coinListReducer(state = initialState, action) {
  switch (action.type) {
    case COINLIST_FETCH_ALL_COINS_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case COINLIST_FETCH_ALL_COINS_SUCCESS:
      return {
        ...state,
        coinList: [...state.coinList, ...action.payload], //we're not changing all of state, just coinList, so that's why we had to spread the rest of state
        isLoading: false,
        hasError: false,
      };
    case COINLIST_FETCH_ALL_COINS_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    default:
      return state;
  }
}

export default coinListReducer;
