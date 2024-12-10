import React from 'react';
import {
  Container,
  HeaderWrapper,
  Header,
  Logo,
  MessageText,
  InfoText,
  CenterSvgWrapper,
  ManualIconWrapper,
} from './styles';
import {ManualSvg, LogoSvg, NoConnectionSvg} from '../../assets/svgs';

const OfflineScreen = () => {
  return (
    <Container>
      <HeaderWrapper>
        <Header>Offline</Header>
      </HeaderWrapper>
      <Logo>
        <LogoSvg width={150} height={150} />
      </Logo>
      <MessageText>No Connection With Machine</MessageText>
      <InfoText>
        Make sure puRO is connected to the same Wi-Fi network as your phone.
      </InfoText>
      <CenterSvgWrapper>
        <NoConnectionSvg width={300} height={300} />
      </CenterSvgWrapper>
      <ManualIconWrapper>
        <ManualSvg width={100} height={100} />
      </ManualIconWrapper>
    </Container>
  );
};

export default OfflineScreen;
