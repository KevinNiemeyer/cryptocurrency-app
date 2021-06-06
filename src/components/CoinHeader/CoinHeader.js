import React from 'react';

import { Logo, StyledBlock, pStyles } from './CoinHeader.styles';

const CoinHeader = (props) => {
  return (
    <StyledBlock size={props.size} display={props.display} big={props.big}>
      <Logo className="spin" image={props.image} />
      <p>{props.name}</p>
      <p style={pStyles}>({props.symbol.toUpperCase()})</p>
    </StyledBlock>
  );
};

export default CoinHeader;
