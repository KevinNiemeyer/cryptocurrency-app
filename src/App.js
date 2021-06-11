import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, CoinPage } from 'pages';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes';
import GlobalStyle from './GlobalStyle';

import './App.css';

const themes = {
  light: lightTheme,
  dark: darkTheme,
};
class App extends React.Component {
  state = {
    theme: 'dark',
  };
  render() {
    return (
      <ThemeProvider theme={themes[this.state.theme]}>
        <Router>
          <GlobalStyle />

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
