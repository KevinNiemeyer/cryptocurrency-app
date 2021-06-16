import CoinHeader from 'components/CoinHeader';
import { Container, Wrapper } from './CoinCard.styles';
import ButtonGroup from 'components/ButtonGroup';

const CoinCard = (props) => (
  <Container>
    <Wrapper>
      <CoinHeader
        name={props.list.name}
        image={props.list.image.large}
        symbol={props.list.symbol}
        big
      />
    </Wrapper>
    <ButtonGroup rank={props.list.coingecko_rank} />
  </Container>
);

export default CoinCard;
