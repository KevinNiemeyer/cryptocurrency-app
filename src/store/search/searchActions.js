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
    dispatch({
      type: SEARCH_FETCH_COIN_DATA_SUCCESS,
      payload: data.map(toCamelCase),
    });
  } catch (err) {
    dispatch({
      type: SEARCH_FETCH_COIN_DATA_ERROR,
    });
  }
};
