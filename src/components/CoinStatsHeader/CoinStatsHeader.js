import React from 'react';
import { Container, Row, H1, P } from './CoinStatsHeader.styles';
import { round } from 'utils';

class CoinStatsHeader extends React.Component {
  render() {
    //console.log(this.props.list.market_data.current_price.usd);
    return (
      <Container>
        <Row>
          <H1>${round(this.props.price, 2)}</H1>
          <P change={this.props.change} big={true}>
            {round(this.props.change, 2)}%
          </P>
        </Row>
      </Container>
    );
  }
}

export default CoinStatsHeader;
