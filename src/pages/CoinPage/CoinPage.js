import React from 'react';
import axios from 'axios';
import { CoinCard, CoinStats } from 'components';
import { Container, Breadcrumb, StyledLink, Wrapper } from './CoinPage.styles';

class CoinPage extends React.Component {
  state = {
    list: null,
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
      <Container>
        {this.state.isLoading && <div>Loading...</div>}
        {dataReady && (
          <div>
            <Breadcrumb>
              <StyledLink to="/">Coins</StyledLink>
              {` > ${this.props.match.params.name}`}
            </Breadcrumb>

            <Wrapper>
              <CoinCard list={this.state.list} />
              <CoinStats list={this.state.list} />
            </Wrapper>
          </div>
        )}
      </Container>
    );
  }
}

export default CoinPage;
