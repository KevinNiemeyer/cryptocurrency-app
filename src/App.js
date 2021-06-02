import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { storage } from 'utils';
import GlobalStyle from './GlobalStyle';
import { Home } from 'pages';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <GlobalStyle />
        <div>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
