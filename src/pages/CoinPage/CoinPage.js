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
    price: 0,
    isLoading: false,
    hasError: false,
  };

  getData = async () => {
    try {
      this.setState({ isLoading: true });
      const data = await axios(
        `${process.env.REACT_APP_API_ENDPOINT}coins/${this.props.match.params.name}`
      );
      console.log(data.data);
      this.setState({
        list: data.data,
        name: data.data.name,
        image: data.data.image,
        symbol: data.data.symbol,
        rank: data.data.coingecko_rank,
        price: data.data.market_data.current_price.usd,
        marketCap: data.data.market_data.market_cap.usd,
        change: data.data.market_data.atl_change_percentage.xrp,
      });
    } catch {
      this.setState({ hasError: true, isLoading: false });
    }
  };
  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <Container>
        <Breadcrumb>
          <StyledLink to="/">Coins</StyledLink>
          {` > ${this.props.match.params.name}`}
        </Breadcrumb>
        <Wrapper>
          <CoinCard
            list={this.state.list}
            name={this.state.name}
            image={this.state.image.large}
            symbol={this.state.symbol}
            rank={this.state.rank}
            big={true}
          />
          <CoinStats
            change={this.state.change}
            price={this.state.price}
            list={this.state.list}
          />
        </Wrapper>
      </Container>
    );
  }
}

export default CoinPage;
