import axios from 'axios';

export const getAllCoins = () => async (dispatch, state) => {
  try {
    dispatch({
      type: 'COINLIST_FETCH_ALL_COINS_PENDING',
    });
    const data = await axios(
      `${process.env.REACT_APP_API_ENDPOINT}coins/markets?vs_currency=USD&order=market_cap_desc&per_page=25&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C`
    );
    dispatch({
      type: 'COINLIST_FETCH_ALL_COINS_SUCCESS',
      payload: data.data,
    });
  } catch (err) {
    dispatch({
      type: 'COINLIST_FETCH_ALL_COINS_ERROR',
    });
  }
};
/* getAllCoins = async () => {
    try {
      this.setState({ isLoading: true });

      const data = await axios(
        `${process.env.REACT_APP_API_ENDPOINT}coins/markets?vs_currency=USD&order=market_cap_desc&per_page=25&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C`
      );

      this.setState({ coinList: data.data, isLoading: false, hasError: false });
    } catch {
      this.setState({ hasError: true, isLoading: false });
    }
  }; */
