import React from 'react';
import axios from 'axios';
import { UL, LI, P, Container } from './CoinList.styles';
import { storage } from 'utils';
import { CoinRow } from 'components';

class CoinList extends React.Component {
  state = {
    coinList: [],
  };
  getData = async () => {
    const data = await axios(
      `${process.env.REACT_APP_API_ENDPOINT}coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C`
    );

    this.setState({ coinList: data.data });
  };
  componentDidMount() {
    this.getData();
  }

  render() {
    const { coinList } = this.state;
    return (
      <Container>
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
          {coinList.map((coin, index) => {
            const {
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
            } = coin;

            return (
              <CoinRow
                rank={index}
                symbol={symbol}
                name={name}
                market_cap={market_cap}
                current_price={current_price}
                price_change_percentage_24h_in_currency={
                  price_change_percentage_24h_in_currency
                }
                price_change_percentage_1h_in_currency={
                  price_change_percentage_1h_in_currency
                }
                price_change_percentage_7d_in_currency={
                  price_change_percentage_7d_in_currency
                }
                total_volume={total_volume}
                image={image}
                market_cap_rank={market_cap_rank}
              />
            );
          })}
        </UL>
      </Container>
    );
  }
}

export default CoinList;
