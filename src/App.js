import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import { Home, CoinPage } from 'pages';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <GlobalStyle />
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/coin/:name" component={CoinPage}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
