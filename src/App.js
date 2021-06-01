import React from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { storage } from "utils";
import Home from 'pages/Home'
import './App.css'


class App extends React.Component {
  state = {
    coins: []
  }
  getData = async () => {
    const data = await axios(`${process.env.REACT_APP_API_ENDPOINT}coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false`);
    // build the coin item:

    this.setState({ coins: data.data })
    storage('set', 'coins',data.data);
}
  componentDidMount() {
    this.getData();
  }

  render() {
    const { coins } = this.state;
    return (
      <Router>
        <div className='landing'>Landing Page
          <ul>
            {coins.map(coin => {
              const { symbol, name, market_cap, current_price, price_change_percentage_24h, image} = coin
              return <li className="list-item">{symbol.toUpperCase()} <p>{name}</p> <p>{market_cap}</p> <p>{price_change_percentage_24h}</p> <img src={image} alt="none" /></li>
        })}
          </ul>
        </div>
        <Switch>
          <Route path="/">

          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App
