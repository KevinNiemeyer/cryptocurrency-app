import React from 'react';
import { Container, SearchInput } from './Form.styles';

class Form extends React.Component {
  state = {
    inputValue: '',
  };
  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const value = this.state.inputValue;
    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <Container>
        <SearchInput
          onChange={this.handleChange}
          value={this.state.inputValue}
          placeholder="Search"
        />
      </Container>
    );
  }
}

export default Form;
