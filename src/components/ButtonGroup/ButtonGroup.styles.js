import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 15% 75%;
  align-items: center;
  gap: 0.3em;
  color: ${(props) => props.theme.secondary2};
  margin-top: 3em;
`;

export const Row = styled.div`
  ${(props) =>
    props.first &&
    css`
      margin-bottom: 2em;
    `}
  display: flex;
  margin-left: 10px;
  align-items: center;
`;

export const StyledButton = styled.a`
  color: ${(props) => {
    switch (props.type) {
      case 'highlight':
        return props.theme.primary2;
      case 'special':
        return props.theme.secondary2;
      default:
        return props.theme.primary1;
    }
  }};

  background: ${(props) => {
    switch (props.type) {
      case 'highlight':
        return props.theme.primary1;
      case 'special':
        return props.theme.primary2;
      default:
        return props.theme.primary2;
    }
  }};

  cursor: pointer;
  text-decoration: none;
  display: flex;

  padding: ${(props) => (props.big ? '.8em 0.5em' : '.6em 0.4em')};
  align-items: center;
  border-radius: 3px;
  &:active {
    box-shadow: 0px 0px 0px 1px ${(props) => props.theme.secondary2};
  }
  margin-left: 5px;
`;

export const BellWrapper = styled.div`
  ${(props) =>
    props.first &&
    css`
      margin-bottom: 2em;
    `}
  display: flex;
  justify-content: flex-end;
`;
export const Bell = styled.div`
  padding: 0.3em;
  display: flex;
  color: ${(props) => props.theme.secondary2};
  background: black;
  border: solid 1px ${(props) => props.theme.secondary2};
  border-radius: 3px;
  justify-content: center;
  font-size: 1.2em;
`;
