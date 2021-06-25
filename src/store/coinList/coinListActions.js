import axios from 'axios';
import { toCamelCase } from '../../utils/format';
import {
  COINLIST_FETCH_ALL_COINS_PENDING,
  COINLIST_FETCH_ALL_COINS_SUCCESS,
  COINLIST_FETCH_ALL_COINS_ERROR,
} from './coinListReducer';

export const getAllCoins = () => async (dispatch, state) => {
  try {
    dispatch({
      type: COINLIST_FETCH_ALL_COINS_PENDING,
    });
    const { data } = await axios(
      `${process.env.REACT_APP_API_ENDPOINT}coins/markets?vs_currency=USD&order=market_cap_desc&per_page=25&page=1&sparkline=false&price_change_percentage=1h,24h,7d`
    );
    dispatch({
      type: COINLIST_FETCH_ALL_COINS_SUCCESS,
      payload: data.map(toCamelCase),
    });
  } catch (err) {
    dispatch({
      type: COINLIST_FETCH_ALL_COINS_ERROR,
    });
  }
};
