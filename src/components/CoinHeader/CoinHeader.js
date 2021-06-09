import React from 'react';

import { Logo, StyledHeader, Name, pStyles } from './CoinHeader.styles';

const CoinHeader = (props) => {
  return (
    <StyledHeader size={props.size} display={props.display} big={props.big}>
      <Logo className="spin" image={props.image} />
      <Name>{props.name}</Name>
      <p style={pStyles}>({props.symbol.toUpperCase()})</p>
    </StyledHeader>
  );
};

export default CoinHeader;
