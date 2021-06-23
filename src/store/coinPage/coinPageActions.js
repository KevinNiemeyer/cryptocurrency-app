import axios from 'axios';
import { toCamelCase } from '../../utils/format';
import {
  COINPAGE_FETCH_COIN_DATA_PENDING,
  COINPAGE_FETCH_COIN_DATA_SUCCESS,
  COINPAGE_FETCH_COIN_DATA_ERROR,
} from './coinPageReducer';

export const getCoinData = (coin) => async (dispatch, state) => {
  try {
    dispatch({
      type: COINPAGE_FETCH_COIN_DATA_PENDING,
    });

    const { data } = await axios(
      `${process.env.REACT_APP_API_ENDPOINT}coins/${coin}`
    );
    dispatch({
      type: COINPAGE_FETCH_COIN_DATA_SUCCESS,
      payload: toCamelCase(data),
    });
    console.log(data);
  } catch (err) {
    dispatch({
      type: COINPAGE_FETCH_COIN_DATA_ERROR,
    });
  }
};
