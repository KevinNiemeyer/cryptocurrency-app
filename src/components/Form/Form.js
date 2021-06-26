//can search by name, symbol, or id

import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { getSearchData } from '../../store/search/searchActions';
import { Container, SearchInput, Dropdown, StyledLink } from './Form.styles';

class Form extends React.Component {
  state = {
    inputValue: '',
    searchTerm: '',
    filteredCoins: [],
    showDropdown: false,
  };

  inputRef = React.createRef();

  componentDidMount() {
    this.props.getSearchData();
  }

  handleChange = (e) => {
    console.log(e);
    this.setState({ showDropdown: true });
    this.setState({
      filteredCoins: this.props.searchData.coinNames.filter((coin) => {
        return coin.includes(this.state.inputValue);
      }),
    });
    this.setState({ inputValue: e.target.value });
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
    this.setState({ inputValue: '' });
    this.setState({ showDropdown: false });
    this.props.history.push(
      `/coins/${this.state.filteredCoins[0].toLowerCase()}`
    );
  };

  render() {
    const { coins, isLoading } = this.props.searchData;
    console.log(this.state.filteredCoins);
    const dataReady = !isLoading && coins;
    const { inputValue, showDropdown } = this.state;
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
        {true && (
          <Dropdown showDropdown={showDropdown}>
            {this.state.filteredCoins.map((coinName) => {
              return (
                <StyledLink onClick={this.handleSubmit}>{coinName}</StyledLink>
              );
            })}
          </Dropdown>
        )}
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  searchData: state.searchData,
});

const mapDispatchToProps = {
  getSearchData,
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Form));
