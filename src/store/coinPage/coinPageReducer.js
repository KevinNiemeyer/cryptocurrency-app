const initialState = {
  coinData: null,
  isLoading: false,
  hasError: false,
};

export const COINPAGE_FETCH_COIN_DATA_PENDING =
  'COINPAGE_FETCH_COIN_DATA_PENDING';
export const COINPAGE_FETCH_COIN_DATA_SUCCESS =
  'COINPAGE_FETCH_COIN_DATA_SUCCESS';
export const COINPAGE_FETCH_COIN_DATA_ERROR = 'COINPAGE_FETCH_COIN_DATA_ERROR';

function coinPageReducer(state = initialState, action) {
  switch (action.type) {
    case COINPAGE_FETCH_COIN_DATA_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case COINPAGE_FETCH_COIN_DATA_SUCCESS:
      return {
        ...state,
        coinData: { ...state.coinData, ...action.payload },
        isLoading: false,
      };

    case COINPAGE_FETCH_COIN_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    default:
      return state;
  }
}

export default coinPageReducer;
