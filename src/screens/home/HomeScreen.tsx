import React from 'react';
import {Text} from 'react-native';
import {Container, Header, Logo, StartButton, ButtonText} from './styles';
import PuroSvg from '../../assets/svgs/puro.svg';

const HomeScreen = ({navigation}: any) => {
  return (
    <Container>
      <Header>Connected</Header>
      <Logo>
        <PuroSvg width={80} height={80} />
      </Logo>
      <Text>Liters to Fill</Text>
      <StartButton onPress={() => navigation.navigate('Offline')}>
        <ButtonText>START</ButtonText>
      </StartButton>
    </Container>
  );
};

export default HomeScreen;
