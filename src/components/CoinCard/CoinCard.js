import CoinHeader from 'components/CoinHeader';
import { Container, Wrapper } from './CoinCard.styles';
import ButtonGroup from 'components/ButtonGroup';

const CoinCard = (props) => (
  <Container>
    <Wrapper>
      <CoinHeader
        name={props.coinData.name}
        image={props.coinData.image.large}
        symbol={props.coinData.symbol}
        big
      />
    </Wrapper>
    <ButtonGroup rank={props.coinData.coingecko_rank} />
  </Container>
);

export default CoinCard;
