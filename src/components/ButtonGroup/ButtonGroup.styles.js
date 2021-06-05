import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaBluetooth } from 'react-icons/fa';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 8% 75%;
  align-items: center;
  gap: 0.3em;
  color: antiquewhite;
  margin-top: 3em;
`;

export const Row = styled.div`
  display: flex;
  margin-left: 10px;
  align-items: center;
`;

export const StyledButton = styled.a`
  color: ${(props) => props.fgColor};
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
  display: flex;
  justify-content: flex-end;
`;
export const Bell = styled.div`
  padding: 0.3em;
  display: flex;
  color: white;
  background: black;
  border: solid 1px white;
  border-radius: 3px;
  justify-content: center;
  font-size: 1.2em;
`;

export const firstRow = {
  marginBottom: '2em',
};
