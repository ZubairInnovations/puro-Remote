import React from 'react';
import {
  Container,
  HeaderWrapper,
  Header,
  Logo,
  MessageText,
  InfoText,
  CenterSvgWrapper,
} from './styles';
import {LogoSvg, AlarmSvg} from '../../assets/svgs';

const AlarmScreen = () => {
  return (
    <Container>
      <HeaderWrapper>
        <Header>Connected</Header>
      </HeaderWrapper>
      <Logo>
        <LogoSvg width={150} height={150} />
      </Logo>
      <MessageText>LOW FEED PRESSURE !!!</MessageText>
      <InfoText>
        Please acknowledge the alarm on the machine touch screen
      </InfoText>
      <CenterSvgWrapper>
        <AlarmSvg width={2700} height={270} />
      </CenterSvgWrapper>
    </Container>
  );
};

export default AlarmScreen;
