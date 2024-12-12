import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {
  Container,
  Logo,
  LitersText,
  Underline,
  StartButton,
  ButtonText,
  CenterImageWrapper,
  ManualIconWrapper,
} from './styles';
import {useNavigation} from '@react-navigation/native';
import {Header} from '../../components/header';
import {ConnectedPng, LogoPng, ManualPng} from '../../assets/images';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleNavigateToOffline = () => {
    navigation.navigate('Offline');
  };

  const handleNavigateToStartup = () => {
    navigation.navigate('Startup');
  };

  return (
    <Container>
      <Header title="Connected" />
      <Logo>
        <Image source={LogoPng} style={{width: 155, height: 120}} />
      </Logo>
      <LitersText>Liters to Fill</LitersText>
      <Underline />
      <StartButton onPress={handleNavigateToStartup}>
        <ButtonText>START</ButtonText>
      </StartButton>
      <CenterImageWrapper>
        <Image source={ConnectedPng} style={{width: 190, height: 370}} />
      </CenterImageWrapper>
      <ManualIconWrapper>
        <TouchableOpacity onPress={handleNavigateToOffline}>
          <Image source={ManualPng} style={{width: 100, height: 100}} />
        </TouchableOpacity>
      </ManualIconWrapper>
    </Container>
  );
};

export default HomeScreen;
