import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 8% 75%;
  align-items: center;
  gap: 0.3em;
  color: antiquewhite;
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
  color: ${(props) => props.theme.fgColor};
  //cant get this to work right:
  /*   ${(props) =>
    props.highlight &&
    css`
    color: {props.theme.fg1};
  `} */
  background: ${(props) => props.bgColor};
  cursor: pointer;
  text-decoration: none;
  display: flex;
  height: 1em;
  padding: ${(props) => (props.big ? '1.1em 0.5em' : '.9em 0.4em')};
  align-items: center;
  border-radius: 3px;
  &:active {
    box-shadow: 0px 0px 0px 1px antiquewhite;
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
  color: antiquewhite;
  background: black;
  border: solid 1px antiquewhite;
  border-radius: 3px;
  justify-content: center;
  font-size: 1.2em;
`;
