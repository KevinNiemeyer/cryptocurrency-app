import React from 'react';
import { Container, Row } from './CoinStatsHeader.styles';
import { round } from 'utils';

class CoinStatsHeader extends React.Component {
  render() {
    console.log(this.props.list.market_data.current_price.usd);
    return (
      <Container style={{ color: 'white', width: '100%' }}>
        <Row>
          <p>${round(this.props.price, 2)}</p>
          <p>?</p>
        </Row>
        <Row>
          <p>?</p>
          <p>?</p>
        </Row>
      </Container>
    );
  }
}

export default CoinStatsHeader;
