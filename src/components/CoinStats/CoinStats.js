import React from 'react';
import { Container } from './CoinStats.styles';
import { CoinStatsHeader, CoinStatsCard } from 'components';

class CoinStats extends React.Component {
  render() {
    if (!this.props.list) {
      return;
    }
    console.log(this.props.list.market_data.current_price.usd);
    return (
      <Container>
        <CoinStatsHeader
          change={this.props.change}
          list={this.props.list}
          price={this.props.price}
        />
        <CoinStatsCard
          marketCap={this.props.marketCap}
          list={this.props.list}
          high={this.props.high24hr}
          low={this.props.low24hr}
          volume24hr={this.props.volume24hr}
          circulatingSupply={this.props.circulatingSupply}
          maxSupply={this.props.maxSupply}
        ></CoinStatsCard>
      </Container>
    );
  }
}

export default CoinStats;
