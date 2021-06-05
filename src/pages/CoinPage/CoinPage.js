import React from 'react';
import axios from 'axios';
import CoinCard from 'components/CoinCard';
import CoinStats from 'components/CoinStats';

import { Container, Breadcrumb, StyledLink, Wrapper } from './CoinPage.styles';

class CoinPage extends React.Component {
  state = {
    name: '',
    image: '',
    symbol: '',
  };

  getData = async () => {
    const data = await axios(
      `${process.env.REACT_APP_API_ENDPOINT}coins/${this.props.match.params.name}`
    );
    this.setState({
      name: data.data.name,
      image: data.data.image,
      symbol: data.data.symbol,
      rank: data.data.coingecko_rank,
    });
  };
  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <Container>
        {/*need to make this its own component, but not sure how routing will work*/}
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
        </Wrapper>
      </Container>
    );
  }
}

export default CoinPage;
