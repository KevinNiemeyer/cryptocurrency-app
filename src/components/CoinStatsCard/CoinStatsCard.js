import React from 'react';
import { Container, Row, Header, Data } from './CoinStatsCard.styles';
import { round } from '../../utils/math';

const CoinStatsCard = (props) => {
  const marketCap = props.list.market_data.market_cap.usd;

  return (
    <Container>
      {console.log(marketCap)}
      <Row>
        <Header>Market Cap</Header>
        <Header>24 Hour Trading Vol</Header>
      </Row>
      <Row>
        <Data>${round(marketCap, 0)}</Data>
        <Data>${round(props.volume24hr, 0)}</Data>
      </Row>
      <Row>
        <Header>24h Low / 24h High</Header>
        <Header>Circulating Supply</Header>
      </Row>
      <Row>
        <Data>
          ${round(props.high, 0)} / ${round(props.low, 0)}
        </Data>
        <Data>
          {round(props.circulatingSupply, 0)} / {round(props.maxSupply, 0)}
        </Data>
      </Row>
    </Container>
  );
};

export default CoinStatsCard;
