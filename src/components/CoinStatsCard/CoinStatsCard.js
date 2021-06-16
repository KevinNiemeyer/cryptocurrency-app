import React from 'react';
import { Container, Row, Header, Data } from './CoinStatsCard.styles';
import { round } from '../../utils/math';

const CoinStatsCard = (props) => {
  return (
    <Container>
      <Row>
        <Header>Market Cap</Header>
        <Header>24 Hour Trading Vol</Header>
      </Row>
      <Row>
        <Data>${round(props.list.market_data.market_cap.usd, 0)}</Data>
        <Data>${round(props.list.market_data.total_volume.usd, 0)}</Data>
      </Row>
      <Row>
        <Header>24h Low / 24h High</Header>
        <Header>Circulating Supply</Header>
      </Row>
      <Row>
        <Data>
          ${round(props.list.market_data.high_24h.usd, 0)} / $
          {round(props.list.market_data.low_24h.usd, 0)}
        </Data>
        <Data>
          {round(props.list.market_data.circulating_supply, 0)} /{' '}
          {round(props.list.market_data.max_supply, 0)}
        </Data>
      </Row>
    </Container>
  );
};

export default CoinStatsCard;
