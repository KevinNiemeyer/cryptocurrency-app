import axios from 'axios';
import { toLowerCase, toCamelCase } from '../../utils/format';
import {
  SEARCH_FETCH_COIN_DATA_PENDING,
  SEARCH_FETCH_COIN_DATA_SUCCESS,
  SEARCH_FETCH_COIN_DATA_ERROR,
} from './searchReducer';

export const getSearchData = () => async (dispatch, state) => {
  try {
    dispatch({
      type: SEARCH_FETCH_COIN_DATA_PENDING,
    });
    const { data } = await axios(
      `${process.env.REACT_APP_API_ENDPOINT}coins/list`
    );
    const coinNames = Object.entries(data).map((coin) => {
      return coin[1]['name'];
    });
    dispatch({
      type: SEARCH_FETCH_COIN_DATA_SUCCESS,
      payload: coinNames,
    });
  } catch (err) {
    dispatch({
      type: SEARCH_FETCH_COIN_DATA_ERROR,
    });
  }
};
