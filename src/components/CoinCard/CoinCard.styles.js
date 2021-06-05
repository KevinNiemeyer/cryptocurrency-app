import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  color: antiquewhite;
  width: 100%;
`;

export const DropDownBtn = styled.button`
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  width: 10em;
`;
