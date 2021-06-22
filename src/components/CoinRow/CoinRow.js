import React from 'react';
import CoinHeader from 'components/CoinHeader';
import { StyledLink } from './CoinRow.styles';
import { round } from '../../utils/math';

const CoinRow = (props) => {
  return (
    <StyledLink to={`/coins/${props.id}`}>
      <p>{props.market_cap_rank}</p>
      <CoinHeader name={props.name} image={props.image} symbol={props.symbol} />
      <p>${round(props.current_price, 2)}</p>
      <p>{round(props.price_change_percentage_1h_in_currency, 1)}%</p>
      <p>{round(props.price_change_percentage_24h_in_currency, 1)}%</p>
      <p>{round(props.price_change_percentage_7d_in_currency, 1)}%</p>
      <p>${round(props.total_volume, 0)}</p>
      <p>${round(props.market_cap, 0)}</p>
      <p>Graph Coming Soon</p>
    </StyledLink>
  );
};

export default CoinRow;
