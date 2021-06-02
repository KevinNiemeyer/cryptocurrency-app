import React from 'react';
import { LI, P } from './CoinRow.styles';
const CoinRow = (props) => {
  return (
    <LI>
      <P>{props.rank + 1}</P>
      <P>
        <img src={props.image} alt="none" />
      </P>
      <P>{props.name}</P>
      <P>{props.symbol.toUpperCase()}</P>
      <P>{props.current_price}</P>
      <P>{props.price_change_percentage_1h_in_currency}</P>
      <P>{props.price_change_percentage_24h_in_currency}</P>
      <P>{props.price_change_percentage_7d_in_currency}</P>
      <P>{props.total_volume}</P>

      <P>{props.market_cap}</P>
    </LI>
  );
};

export default CoinRow;
