import {
  Container,
  Row,
  StyledButton,
  BellWrapper,
  Bell,
} from './ButtonGroup.styles';
import { FaBell } from 'react-icons/fa';

const ButtonGroup = (props) => (
  <Container>
    <BellWrapper first>
      <Bell>
        <FaBell />
      </Bell>
    </BellWrapper>
    <Row first>
      <StyledButton big type={'highlight'}>
        Buy / Sell &#x25BC;
      </StyledButton>
      <StyledButton big type={'highlight'}>
        Long / Short &#x25BC;
      </StyledButton>
      <StyledButton big type={'highlight'}>
        Earn / Loan &#x25BC;
      </StyledButton>
    </Row>
    Market Cap
    <Row>
      <StyledButton type={'special'}>Rank #{props.rank}</StyledButton>
    </Row>
    Website
    <Row>
      <StyledButton>Bitcoin.org</StyledButton>
    </Row>
    Explorers
    <Row>
      <StyledButton>Blockchair</StyledButton>
      <StyledButton>Btc</StyledButton>
      <StyledButton>Tokenview</StyledButton>
    </Row>
    Wallets
    <Row>
      <StyledButton type={'highlight'}>Crypto.com DeFi Wallet</StyledButton>
      <StyledButton>Ledger</StyledButton>
      <StyledButton>Trezor</StyledButton>
      <StyledButton>Electrum</StyledButton>
    </Row>
    Community
    <Row>
      <StyledButton>Reddit</StyledButton>
      <StyledButton>Twitter</StyledButton>
      <StyledButton>Facebook</StyledButton>
      <StyledButton>bitcointalk.org</StyledButton>
    </Row>
    Source Code
    <Row>
      <StyledButton>Github</StyledButton>
    </Row>
    Tags
    <Row>
      <StyledButton>Cryptocurrency</StyledButton>
    </Row>
  </Container>
);

export default ButtonGroup;
