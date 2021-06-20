import axios from 'axios';

export const getCoinData = () => async (dispatch, state) => {
  try {
    dispatch({
      type: 'COINPAGE_FETCH_COIN_DATA_PENDING',
    });
    const data = await axios('https://api.coingecko.com/api/v3/coins/bitcoin');
    dispatch({
      type: 'COINPAGE_FETCH_COIN_DATA_SUCCESS',
      payload: data.data,
    });
  } catch (err) {
    dispatch({
      type: 'COINPAGE_FETCH_COIN_DATA_ERROR',
      //how do we implement hasError?
    });
  }
};
