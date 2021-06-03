import React from 'react';
import axios from 'axios';
import { storage } from 'utils';
import styled from 'styled-components';
import { CoinList } from 'components';

class Home extends React.Component {
  render() {
    return <CoinList />;
  }
}

export default Home;
