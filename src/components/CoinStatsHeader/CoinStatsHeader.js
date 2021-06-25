import React from 'react';
import { Container, Row, H1, P } from './CoinStatsHeader.styles';
import { round } from 'utils';

class CoinStatsHeader extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <H1>${round(this.props.coinData.marketData.currentPrice.usd, 2)}</H1>
          <P change={this.props.change} big={true}>
            {round(this.props.coinData.marketData.atlChangePercentage.usd, 2)}%
          </P>
        </Row>
      </Container>
    );
  }
}

export default CoinStatsHeader;
