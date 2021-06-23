import React from 'react';
import { Container } from './CoinStats.styles';
import { CoinStatsHeader, CoinStatsCard } from 'components';

class CoinStats extends React.Component {
  render() {
    return (
      <Container>
        <CoinStatsHeader coinData={this.props.coinData} />
        <CoinStatsCard coinData={this.props.coinData} />
      </Container>
    );
  }
}

export default CoinStats;
