import React from 'react';
//import axios from 'axios';
import { connect } from 'react-redux';
import { CoinCard, CoinStats } from 'components';
import { getCoinData } from '../../store/coinPage/coinPageActions';
import { Container, Breadcrumb, StyledLink, Wrapper } from './CoinPage.styles';

class CoinPage extends React.Component {
  /* state = {
    coinData: null,
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
        coinData: data.data,
        isLoading: false,
        hasError: false,
      });
    } catch {
      this.setState({ hasError: true, isLoading: false });
    }
  }; */

  componentDidMount() {
    //this.getData();
    this.props.getCoinData();
  }

  render() {
    console.log('props: ', this.props.coinData); //coinData isn't getting passed to props
    const { coinData, isLoading } = this.props.coinData;
    const dataReady = !isLoading && coinData;
    return (
      <Container>
        {isLoading && <div style={{ color: 'white' }}>Loading...</div>}
        {dataReady && ( //how to implement dataReady here
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
