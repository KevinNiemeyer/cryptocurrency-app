//can search by name, symbol, or id

import React from 'react';
import storage from 'utils/storage';
import { withRouter } from 'react-router';

import { Container, SearchInput, Dropdown, StyledLink } from './Form.styles';

class Form extends React.Component {
  state = {
    inputValue: '',
    searchTerm: '',
    allCoins: [],
    filteredCoins: [],
    showDropdown: false,
  };
  inputRef = React.createRef();

  componentDidMount() {
    this.setState({ allCoins: storage('get', 'coins') });
  }
  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
    this.setState({
      filteredCoins: this.state.allCoins.filter((coin) => {
        return coin.includes(this.state.inputValue);
      }),
    });
  };
  handleEnter = (e) => {
    this.inputRef.current.focus(e);
    this.setState({ showDropdown: true });
  };
  handleExit = (e) => {
    this.inputRef.current.blur(e);
    this.setState({ showDropdown: false });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ showDropdown: false });
    this.props.history.push(`/coins/${this.state.inputValue.toLowerCase()}`);
    this.setState({ inputValue: '' });
  };

  render() {
    const { inputValue, showDropdown, filteredCoins } = this.state;
    return (
      <Container onSubmit={this.handleSubmit}>
        <SearchInput
          ref={this.inputRef}
          onMouseEnter={this.handleEnter}
          type="text"
          onChange={this.handleChange}
          value={inputValue}
          placeholder="Search"
        />
        <Dropdown showDropdown={showDropdown}>
          {filteredCoins.map((coin) => {
            return <StyledLink onClick={this.handleSubmit}>{coin}</StyledLink>;
          })}
        </Dropdown>
      </Container>
    );
  }
}

export default withRouter(Form);

/* {
   allCoins.filter((coin) => {
     return coin.includes(inputValue) && <StyledLink>{coin}</StyledLink>;
   });
 } */
