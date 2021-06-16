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
  color: ${(props) => props.theme.secondary2};
  width: 100%;
`;
