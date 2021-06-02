import React from 'react';
import styled from 'styled-components';
import { LI, P, Block } from './CoinRow.styles';

const CoinRow = (props) => {
  const IMG = styled.div`
    text-align: center;
    width: 2em;
    height: 2em; /* Set height */
    margin: 0px;
    padding: 0px;
    background-image: url(${props.image});
    background-size: cover; /* Scaling down large image to a div */
    background-repeat: no-repeat;
    background-position: center;
  `;
  return (
    <LI>
      <P>{props.market_cap_rank}</P>
      <Block>
        <IMG />
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
