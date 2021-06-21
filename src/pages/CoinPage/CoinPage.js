import React from 'react';
import { connect } from 'react-redux';
import { CoinCard, CoinStats } from 'components';
import { getCoinData } from '../../store/coinPage/coinPageActions';
import { Container, Breadcrumb, StyledLink, Wrapper } from './CoinPage.styles';

class CoinPage extends React.Component {
  componentDidMount() {
    this.props.getCoinData(this.props.match.params.name);
  }

  render() {
    const { coinData, isLoading } = this.props.coinData;
    const dataReady = !isLoading && coinData;
    return (
      <Container>
        {isLoading && <div style={{ color: 'white' }}>Loading...</div>}
        {dataReady && (
          <div>
            <Breadcrumb>
              <StyledLink to="/">Coins</StyledLink>
              {` > ${this.props.match.params.name}`}
            </Breadcrumb>

            <Wrapper>
              <CoinCard list={coinData} />
              <CoinStats list={coinData} />
            </Wrapper>
          </div>
        )}
      </Container>
    );
  }
}
const mapStateToProps = (state) => ({
  coinData: state.coinData,
});

const mapDispatchToProps = {
  getCoinData,
};
export default connect(mapStateToProps, mapDispatchToProps)(CoinPage);
