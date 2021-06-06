import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 3em 10em;
`;
export const Breadcrumb = styled.div`
  color: white;
  font-size: 1.2rem;
  padding: 1em 0 3em 0;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--clr-primary);
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CoinStats = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  width: 100%;
  color: antiquewhite;
`;
