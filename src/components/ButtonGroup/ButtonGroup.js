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
      <StyledButton
        big
        bgColor="var(--clr-primary)"
        fgColor="var(--clr-secondary)"
      >
        Buy / Sell &#x25BC;
      </StyledButton>
      <StyledButton
        big
        bgColor="var(--clr-primary)"
        fgColor="var(--clr-secondary)"
      >
        Long / Short &#x25BC;
      </StyledButton>
      <StyledButton
        big
        bgColor="var(--clr-primary)"
        fgColor="var(--clr-secondary)"
      >
        Earn / Loan &#x25BC;
      </StyledButton>
    </Row>
    Market Cap
    <Row>
      <StyledButton
        fgColor="var(--clr-special-2)"
        bgColor="var(--clr-special-1)"
      >
        Rank #{props.rank}
      </StyledButton>
    </Row>
    Website
    <Row>
      <StyledButton bgColor="var(--clr-secondary)" fgColor="var(--clr-primary)">
        Bitcoin.org
      </StyledButton>
    </Row>
    Explorers
    <Row>
      <StyledButton bgColor="var(--clr-secondary)" fgColor="var(--clr-primary)">
        Blockchair
      </StyledButton>
      <StyledButton bgColor="var(--clr-secondary)" fgColor="var(--clr-primary)">
        Btc
      </StyledButton>
      <StyledButton bgColor="var(--clr-secondary)" fgColor="var(--clr-primary)">
        Tokenview
      </StyledButton>
    </Row>
    Wallets
    <Row>
      <StyledButton bgColor="var(--clr-primary)" fgColor="var(--clr-secondary)">
        Crypto.com DeFi Wallet
      </StyledButton>
      <StyledButton bgColor="var(--clr-secondary)" fgColor="var(--clr-primary)">
        Ledger
      </StyledButton>
      <StyledButton bgColor="var(--clr-secondary)" fgColor="var(--clr-primary)">
        Trezor
      </StyledButton>
      <StyledButton bgColor="var(--clr-secondary)" fgColor="var(--clr-primary)">
        Electrum
      </StyledButton>
    </Row>
    Community
    <Row>
      <StyledButton bgColor="var(--clr-secondary)" fgColor="var(--clr-primary)">
        Reddit
      </StyledButton>
      <StyledButton bgColor="var(--clr-secondary)" fgColor="var(--clr-primary)">
        Twitter
      </StyledButton>
      <StyledButton bgColor="var(--clr-secondary)" fgColor="var(--clr-primary)">
        Facebook
      </StyledButton>
      <StyledButton bgColor="var(--clr-secondary)" fgColor="var(--clr-primary)">
        bitcointalk.org
      </StyledButton>
    </Row>
    Source Code
    <Row>
      <StyledButton bgColor="var(--clr-secondary)" fgColor="var(--clr-primary)">
        Github
      </StyledButton>
    </Row>
    Tags
    <Row>
      <StyledButton bgColor="var(--clr-secondary)" fgColor="var(--clr-primary)">
        Cryptocurrency
      </StyledButton>
    </Row>
  </Container>
);

export default ButtonGroup;
