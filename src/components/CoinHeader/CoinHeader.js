import React from 'react';

import { Logo, StyledHeader, Name } from './CoinHeader.styles';

const CoinHeader = (props) => {
  return (
    <StyledHeader big={props.big}>
      <Logo className="spin" image={props.image} />
      <Name>{props.name}</Name>
      <p>({props.symbol.toUpperCase()})</p>
    </StyledHeader>
  );
};

export default CoinHeader;
