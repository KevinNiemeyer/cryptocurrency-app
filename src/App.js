import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, CoinPage } from 'pages';
import GlobalStyle from './GlobalStyle';

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
            <Route exact path="/coins/:name" component={CoinPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
