import React from 'react';
import { Container } from './CoinStats.styles';
import { CoinStatsHeader, CoinStatsCard } from 'components';

class CoinStats extends React.Component {
  render() {
    return (
      <Container>
        <CoinStatsHeader list={this.props.list} />
        <CoinStatsCard list={this.props.list}></CoinStatsCard>
      </Container>
    );
  }
}

export default CoinStats;
