import React from 'react';
import {TouchableOpacity} from 'react-native';
import {
  Container,
  HeaderWrapper,
  Header,
  Logo,
  LitersText,
  Underline,
  StartButton,
  ButtonText,
  CenterSvgWrapper,
  ManualIconWrapper,
} from './styles';
import {ManualSvg, LogoSvg, ConnectedSvg} from '../../assets/svgs';
import {useNavigation} from '@react-navigation/native';

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
      <HeaderWrapper>
        <Header>Connected</Header>
      </HeaderWrapper>
      <Logo>
        <LogoSvg width={150} height={150} />
      </Logo>
      <LitersText>Liters to Fill</LitersText>
      <Underline />
      <StartButton onPress={handleNavigateToStartup}>
        <ButtonText>START</ButtonText>
      </StartButton>
      <CenterSvgWrapper>
        <ConnectedSvg width={300} height={300} />
      </CenterSvgWrapper>
      <ManualIconWrapper>
        <TouchableOpacity onPress={handleNavigateToOffline}>
          <ManualSvg width={100} height={100} />
        </TouchableOpacity>
      </ManualIconWrapper>
    </Container>
  );
};

export default HomeScreen;
