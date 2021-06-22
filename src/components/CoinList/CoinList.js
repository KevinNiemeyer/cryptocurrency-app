import React from 'react';
import { connect } from 'react-redux';
import { CoinRow } from 'components';
import { getAllCoins } from '../../store/coinList/coinListActions';
import { UL, LI, P, Container } from './CoinList.styles';

class CoinList extends React.Component {
  componentDidMount() {
    this.props.getAllCoins();
  }

  render() {
    const { coinList, isLoading } = this.props.coinList;
    const dataReady = !isLoading && coinList;
    return (
      <Container>
        {isLoading && <div style={{ color: 'white' }}>Loading...</div>}
        {dataReady && (
          <UL>
            <LI>
              <P>Rank</P>
              <P>Coin</P>
              <P>Price</P>
              <P>1hr</P>
              <P>24hr</P>
              <P>7 days</P>
              <P>24hr Volume</P>
              <P>Market Cap</P>
              <P>Last 7 Days</P>
            </LI>
            {coinList.map((coin) => {
              return <CoinRow key={coin.symbol} {...coin} />;
            })}
          </UL>
        )}
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  coinList: state.coinList,
});

const mapDispatchToProps = {
  getAllCoins,
};
export default connect(mapStateToProps, mapDispatchToProps)(CoinList);
