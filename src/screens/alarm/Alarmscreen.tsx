import React from 'react';
import {Image} from 'react-native';
import {
  Container,
  HeaderWrapper,
  Header,
  Logo,
  MessageText,
  InfoText,
  CenterImageWrapper,
} from './styles';
import {AlarmPng, LogoPng} from '../../assets/images';

const AlarmScreen = () => {
  return (
    <Container>
      <HeaderWrapper>
        <Header>Connected</Header>
      </HeaderWrapper>
      <Logo>
        <Image source={LogoPng} style={{width: 190, height: 150}} />
      </Logo>
      <MessageText>LOW FEED PRESSURE !!!</MessageText>
      <InfoText>
        Please acknowledge the alarm on the machine touch screen
      </InfoText>
      <CenterImageWrapper>
        <Image source={AlarmPng} style={{width: 270, height: 270}} />
      </CenterImageWrapper>
    </Container>
  );
};

export default AlarmScreen;
