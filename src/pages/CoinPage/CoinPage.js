import React from 'react';
import axios from 'axios';
import CoinHeader from 'components/CoinHeader';

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
    });
  };
  componentDidMount() {
    this.getData();
  }
  render() {
    console.log(this.state);
    return (
      <Container>
        {/*need to make this its own component, but not sure how routing will work*/}
        <Breadcrumb>
          <StyledLink to="/">Coins</StyledLink>
          {` > ${this.props.match.params.name}`}
          &#x25BC;
        </Breadcrumb>
        <Wrapper>
          <CoinHeader
            name={this.state.name}
            image={this.state.image.large}
            symbol={this.state.symbol}
            size="3rem"
          />
        </Wrapper>
      </Container>
    );
  }
}

export default CoinPage;
