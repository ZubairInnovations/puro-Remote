import React from 'react';
import {Image} from 'react-native';
import {
  Container,
  Logo,
  MessageText,
  InfoText,
  CenterImageWrapper,
  ManualIconWrapper,
} from './styles';
import {Header} from '../../components/header';
import {LogoPng, ManualPng, NoConnectionPng} from '../../assets/images';
import {NoConnectionSvg} from '../../assets/svgs';

const OfflineScreen = () => {
  return (
    <Container>
      <Header title="Offline" bgColor="#808080" />
      <Logo>
        <Image source={LogoPng} style={{width: 190, height: 150}} />
      </Logo>
      <MessageText>No Connection With Machine</MessageText>
      <InfoText>
        Make sure puRO is connected to the same Wi-Fi network as your phone.
      </InfoText>
      <CenterImageWrapper>
        <Image source={NoConnectionPng} style={{width: 200, height: 320}} />
      </CenterImageWrapper>
      <ManualIconWrapper>
        <Image source={ManualPng} style={{width: 100, height: 100}} />
      </ManualIconWrapper>
    </Container>
  );
};

export default OfflineScreen;
