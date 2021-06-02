import React from 'react';
import styled from 'styled-components';
import { LI, P, Block } from './CoinRow.styles';

const CoinRow = (props) => {
  const IMG = styled.image`
    height: 99999px;
    object-fit: contain;
    max-height: 100%;
    max-width: 100%;
    display: block;
    margin: auto auto;
  `;
  return (
    <LI>
      <P>{props.market_cap_rank}</P>
      <Block>
        <IMG src={props.image} alt="none" />
        <P>{props.name}</P>
        <P>{props.symbol.toUpperCase()}</P>
      </Block>
      <P>{props.current_price}</P>
      <P>{props.price_change_percentage_1h_in_currency}</P>
      <P>{props.price_change_percentage_24h_in_currency}</P>
      <P>{props.price_change_percentage_7d_in_currency}</P>
      <P>{props.total_volume}</P>
      <P>{props.market_cap}</P>
      <P>adsf</P>
    </LI>
  );
};

export default CoinRow;
