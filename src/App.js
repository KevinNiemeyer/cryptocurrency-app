import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, CoinPage } from 'pages';
import { NavBar } from 'components';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes';
import GlobalStyle from './GlobalStyle';
import storage from 'utils/storage';

import './App.css';

const themes = {
  light: lightTheme,
  dark: darkTheme,
};

//get all coin names for search function & set in local storage
const getCoinNames = async () => {
  const { data } = await axios(
    `${process.env.REACT_APP_API_ENDPOINT}coins/list`
  );
  const coinNames = data.map((coin) => {
    return coin.name;
  });
  storage('set', 'coins', coinNames);
};

class App extends React.Component {
  componentDidMount() {
    getCoinNames();
  }

  state = {
    theme: 'dark',
  };
  render() {
    return (
      <ThemeProvider theme={themes[this.state.theme]}>
        <Router>
          <GlobalStyle />
          <NavBar />
          <div>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/coins/:name" component={CoinPage} />
            </Switch>
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
