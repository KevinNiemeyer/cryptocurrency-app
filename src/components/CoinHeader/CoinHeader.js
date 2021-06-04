import React from 'react';

import { Block, IMG } from './CoinHeader.styles';

const CoinHeader = (props) => {
  //console.log(props);
  return (
    <Block size={props.size} display={props.display}>
      <IMG className="spin" image={props.image} />
      <p>{props.name}</p>
      <p>({props.symbol.toUpperCase()})</p>
    </Block>
  );
};

export default CoinHeader;
