import React from 'react';
import { Container, Row, Header, Data } from './CoinStatsCard.styles';

const CoinStatsCard = (props) => {
  return (
    <Container>
      <Row>
        <Header>Market Cap</Header>
        <Header>24 Hour Trading Vol</Header>
      </Row>
      <Row>
        <Data>{props.marketCap}</Data>
        <Data>test</Data>
      </Row>
      <Row>
        <Header>24h Low / 24h High</Header>
        <Header>Circulating Supply</Header>
      </Row>
      <Row>
        <Data>test</Data>
        <Data>test</Data>
      </Row>
    </Container>
  );
};

export default CoinStatsCard;
