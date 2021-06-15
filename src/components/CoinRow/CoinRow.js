import React from 'react';
import CoinHeader from 'components/CoinHeader';
import { StyledLink } from './CoinRow.styles';

const CoinRow = (props) => {
  return (
    <StyledLink to={`/coins/${props.id}`}>
      <p>{props.market_cap_rank}</p>
      <CoinHeader
        name={props.name}
        image={props.image}
        symbol={props.symbol}
        big={false}
      />
      <p>${props.current_price}</p>
      <p>{props.price_change_percentage_1h_in_currency}%</p>
      <p>{props.price_change_percentage_24h_in_currency}%</p>
      <p>{props.price_change_percentage_7d_in_currency}%</p>
      <p>${props.total_volume}</p>
      <p>${props.market_cap}</p>
      <p>Graph Coming Soon</p>
    </StyledLink>
  );
};

export default CoinRow;
//
