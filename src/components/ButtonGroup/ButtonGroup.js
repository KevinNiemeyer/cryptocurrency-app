import {
  Container,
  Row,
  StyledButton,
  BellWrapper,
  Bell,
  firstRow,
} from './ButtonGroup.styles';
import { FaBell } from 'react-icons/fa';

const ButtonGroup = (props) => (
  <Container>
    <BellWrapper style={firstRow}>
      <Bell>
        <FaBell />
      </Bell>
    </BellWrapper>
    <Row style={firstRow}>
      <StyledButton big={true} bgColor="#77f4d6" fgColor="#003b2bff">
        Buy / Sell &#x25BC;
      </StyledButton>
      <StyledButton big={true} bgColor="#77f4d6" fgColor="#003b2bff">
        Long / Short &#x25BC;
      </StyledButton>
      <StyledButton big={true} bgColor="#77f4d6" fgColor="#003b2bff">
        Earn / Loan &#x25BC;
      </StyledButton>
    </Row>
    Market Cap
    <Row>
      <StyledButton big={false} fgColor="#003f3cff" bgColor="darkgrey">
        Rank #{props.rank}
      </StyledButton>
    </Row>
    Website
    <Row>
      <StyledButton big={false} bgColor="#003f3cff" fgColor="#77f4d6">
        Bitcoin.org
      </StyledButton>
    </Row>
    Explorers
    <Row>
      <StyledButton big={false} bgColor="#003f3cff" fgColor="#77f4d6">
        Blockchair
      </StyledButton>
      <StyledButton big={false} bgColor="#003f3cff" fgColor="#77f4d6">
        Btc
      </StyledButton>
      <StyledButton big={false} bgColor="#003f3cff" fgColor="#77f4d6">
        Tokenview
      </StyledButton>
    </Row>
    Wallets
    <Row>
      <StyledButton big={false} bgColor="#77f4d6" fgColor="#003b2bff">
        Crypto.com DeFi Wallet
      </StyledButton>
      <StyledButton big={false} bgColor="#003f3cff" fgColor="#77f4d6">
        Buy / Sell &#x25BC;
      </StyledButton>
      <StyledButton big={false} bgColor="#003f3cff" fgColor="#77f4d6">
        Buy / Sell &#x25BC;
      </StyledButton>
      <StyledButton big={false} bgColor="#003f3cff" fgColor="#77f4d6">
        Buy / Sell &#x25BC;
      </StyledButton>
    </Row>
    Community
    <Row>
      <StyledButton big={false} bgColor="#003f3cff" fgColor="#77f4d6">
        Buy / Sell &#x25BC;
      </StyledButton>
      <StyledButton big={false} bgColor="#003f3cff" fgColor="#77f4d6">
        Buy / Sell &#x25BC;
      </StyledButton>
      <StyledButton big={false} bgColor="#003f3cff" fgColor="#77f4d6">
        Buy / Sell &#x25BC;
      </StyledButton>
    </Row>
    Source Code
    <Row>
      <StyledButton big={false} bgColor="#003f3cff" fgColor="#77f4d6">
        Buy / Sell &#x25BC;
      </StyledButton>
    </Row>
    Tags
    <Row>
      <StyledButton big={false} bgColor="#003f3cff" fgColor="#77f4d6">
        Buy / Sell &#x25BC;
      </StyledButton>
    </Row>
  </Container>
);

export default ButtonGroup;
