import React from 'react';
import CoinHeader from 'components/CoinHeader';
import { StyledLink } from './CoinRow.styles';
import { round } from '../../utils/math';

const CoinRow = (props) => {
  return (
    <StyledLink to={`/coins/${props.id}`}>
      <p>{props.marketCapRank}</p>
      <CoinHeader name={props.name} image={props.image} symbol={props.symbol} />
      <p>${round(props.currentPrice, 2)}</p>
      <p>{round(props.priceChangePercentage1HInCurrency, 1)}%</p>
      <p>{round(props.priceChangePercentage24HInCurrency, 1)}%</p>
      <p>{round(props.priceChangePercentage7DInCurrency, 1)}%</p>
      <p>${round(props.totalVolume, 0)}</p>
      <p>${round(props.marketCap, 0)}</p>
      <p>Graph Coming Soon</p>
    </StyledLink>
  );
};

export default CoinRow;
