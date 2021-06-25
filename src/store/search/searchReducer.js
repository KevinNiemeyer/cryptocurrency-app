const initialState = {
  coins: [],
  isLoading: false,
  hasError: false,
};

export const SEARCH_FETCH_COIN_DATA_PENDING = 'SEARCH_FETCH_COIN_DATA_PENDING';
export const SEARCH_FETCH_COIN_DATA_SUCCESS = 'SEARCH_FETCH_COIN_DATA_SUCCESS';
export const SEARCH_FETCH_COIN_DATA_ERROR = 'SEARCH_FETCH_COIN_DATA_ERROR';

function searchReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_FETCH_COIN_DATA_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case SEARCH_FETCH_COIN_DATA_SUCCESS:
      return {
        ...state,
        coins: { ...state.coins, ...action.payload },
        isLoading: false,
        hasError: false,
      };
    case SEARCH_FETCH_COIN_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    default:
      return state;
  }
}

export default searchReducer;
