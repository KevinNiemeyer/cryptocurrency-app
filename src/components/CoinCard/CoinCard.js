import CoinHeader from 'components/CoinHeader';
import { Container, Wrapper } from './CoinCard.styles';
import ButtonGroup from 'components/ButtonGroup';

const CoinCard = (props) => (
  <Container>
    <Wrapper>
      <CoinHeader
        name={props.name}
        image={props.image}
        symbol={props.symbol}
        size={props.size}
        big={props.big}
      />
    </Wrapper>
    <ButtonGroup rank={props.rank} />
  </Container>
);

export default CoinCard;
