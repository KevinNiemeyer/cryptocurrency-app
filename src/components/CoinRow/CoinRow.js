import React from 'react';
import { LI, P, IMG, Block } from './CoinRow.styles';

const CoinRow = (props) => {
  return (
    <LI>
      <P>{props.market_cap_rank}</P>
      <Block>
        <IMG image={props.image} />
        <P>{props.name}</P>
        <P>({props.symbol.toUpperCase()})</P>
      </Block>
      <P>${props.current_price}</P>
      <P>{props.price_change_percentage_1h_in_currency}%</P>
      <P>{props.price_change_percentage_24h_in_currency}%</P>
      <P>{props.price_change_percentage_7d_in_currency}%</P>
      <P>${props.total_volume}</P>
      <P>${props.market_cap}</P>
      <P>Graph Coming Soon</P>
    </LI>
  );
};

export default CoinRow;
//
