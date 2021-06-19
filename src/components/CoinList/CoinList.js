import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { round } from 'utils';
import { CoinRow } from 'components';
import { getAllCoins } from '../../store/coinList/coinListActions';
import { UL, LI, P, Container } from './CoinList.styles';

class CoinList extends React.Component {
  state = {
    coinList: null,
    isLoading: false,
    hasError: false,
  };
  getAllCoins = async () => {
    try {
      this.setState({ isLoading: true });

      const data = await axios(
        `${process.env.REACT_APP_API_ENDPOINT}coins/markets?vs_currency=USD&order=market_cap_desc&per_page=25&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C`
      );

      this.setState({ coinList: data.data, isLoading: false, hasError: false });
    } catch {
      this.setState({ hasError: true, isLoading: false });
    }
  };
  componentDidMount() {
    console.log(this.props);
    //this.getAllCoins();
    this.props.getAllCoins();
  }

  render() {
    //const { coinList, isLoading, hasError } = this.state;
    const { coinList, isLoading, hasError } = this.props.coinList;
    console.log(coinList);
    const dataReady = !this.state.isLoading && this.state.coinList;
    console.log(dataReady);
    return (
      <Container>
        {isLoading && <div style={{ color: 'white' }}>Loading...</div>}
        {true && (
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
              const {
                id,
                symbol,
                name,
                market_cap,
                current_price,
                image,
                price_change_percentage_1h_in_currency,
                price_change_percentage_24h_in_currency,
                price_change_percentage_7d_in_currency,
                total_volume,
                market_cap_rank,
                url,
              } = coin;
              const currentPrice = round(current_price, 2);
              const pcp1h = round(price_change_percentage_1h_in_currency, 1);
              const pcp24h = round(price_change_percentage_24h_in_currency, 1);
              const pcp7d = round(price_change_percentage_7d_in_currency, 1);
              const totalVolume = round(total_volume, 0);
              const marketCap = round(market_cap, 0);
              return (
                <CoinRow
                  key={symbol}
                  id={id}
                  symbol={symbol}
                  name={name}
                  market_cap={marketCap}
                  current_price={currentPrice}
                  price_change_percentage_24h_in_currency={pcp24h}
                  price_change_percentage_1h_in_currency={pcp1h}
                  price_change_percentage_7d_in_currency={pcp7d}
                  total_volume={totalVolume}
                  image={image}
                  market_cap_rank={market_cap_rank}
                  url={url}
                />
              );
            })}
          </UL>
        )}
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  //state is the entire redux store
  coinList: state.coinList,
});

const mapDispatchToProps = {
  getAllCoins,
};
export default connect(mapStateToProps, mapDispatchToProps)(CoinList);
