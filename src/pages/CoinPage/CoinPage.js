import React from 'react';
import axios from 'axios';
import { CoinCard, CoinStats } from 'components';
import { Container, Breadcrumb, StyledLink, Wrapper } from './CoinPage.styles';

class CoinPage extends React.Component {
  state = {
    list: {},
    name: '',
    image: '',
    symbol: '',
    rank: 0,
    price: 0,
    marketCap: 0,
    change: 0,
    high24hr: 0,
    low24hr: 0,
    volume24hr: 0,
    circulatingSupply: 0,
    maxSupply: 0,
    isLoading: false,
    hasError: false,
  };

  getData = async () => {
    try {
      this.setState({ isLoading: true });
      const data = await axios(
        `${process.env.REACT_APP_API_ENDPOINT}coins/${this.props.match.params.name}`
      );
      this.setState({
        list: data.data,
        name: data.data.name,
        image: data.data.image,
        symbol: data.data.symbol,
        rank: data.data.coingecko_rank,
        price: data.data.market_data.current_price.usd,
        marketCap: data.data.market_data.market_cap.usd,
        change: data.data.market_data.atl_change_percentage.usd,
        high24hr: data.data.market_data.high_24h.usd,
        low24hr: data.data.market_data.low_24h.usd,
        volume24hr: data.data.market_data.total_volume.usd,
        circulatingSupply: data.data.market_data.circulating_supply,
        maxSupply: data.data.market_data.max_supply,
        isLoading: false,
        hasError: false,
      });
    } catch {
      this.setState({ hasError: true, isLoading: false });
    }
  };
  componentDidMount() {
    this.getData();
  }
  render() {
    const dataReady = !this.state.isLoading && this.state.list;

    return (
      <div>
        {this.state.isLoading && <div>Loading...</div>}
        {this.state.hasError && (
          <div>There was a problem fetching your data..</div>
        )}
        {dataReady && (
          <Container>
            <Breadcrumb>
              <StyledLink to="/">Coins</StyledLink>
              {` > ${this.props.match.params.name}`}
            </Breadcrumb>
            <Wrapper>
              <CoinCard
                name={this.state.name}
                image={this.state.image.large}
                symbol={this.state.symbol}
                rank={this.state.rank}
                big={true}
              />
              <CoinStats
                list={this.state.list}
                marketCap={this.state.marketCap}
                change={this.state.change}
                price={this.state.price}
                high24hr={this.state.high24hr}
                low24hr={this.state.low24hr}
                volume24hr={this.state.volume24hr}
                circulatingSupply={this.state.circulatingSupply}
                maxSupply={this.state.maxSupply}
              />
            </Wrapper>
          </Container>
        )}
      </div>
    );
  }
}

export default CoinPage;
