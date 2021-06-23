import React from 'react';
import { Container, Row, Header, Data } from './CoinStatsCard.styles';
import { round } from 'utils/math';

const CoinStatsCard = (props) => {
  return (
    <Container>
      <Row>
        <Header>Market Cap</Header>
        <Header>24 Hour Trading Vol</Header>
      </Row>
      <Row>
        <Data>${round(props.coinData.marketData.marketCap.usd, 0)}</Data>
        <Data>${round(props.coinData.marketData.totalVolume.usd, 0)}</Data>
      </Row>
      <Row>
        <Header>24h Low / 24h High</Header>
        <Header>Circulating Supply</Header>
      </Row>
      <Row>
        <Data>
          ${round(props.coinData.marketData.high24H.usd, 0)} / $
          {round(props.coinData.marketData.low24H.usd, 0)}
        </Data>
        <Data>
          {round(props.coinData.marketData.circulatingSupply, 0)} /{' '}
          {round(props.coinData.marketData.maxSupply, 0)}
        </Data>
      </Row>
    </Container>
  );
};

export default CoinStatsCard;
