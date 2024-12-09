import React from 'react';
import { Text } from 'react-native';
import { Container, Header, Logo } from './styles';
import DiamondSvg from '../../assets/svgs/diamond.svg';

const OfflineScreen = () => {
  return (
    <Container>
      <Header>Offline</Header>
      <Logo>
        <DiamondSvg width={80} height={80} />
      </Logo>
      <Text>No Connection with Machine</Text>
      <Text>Make sure puRO is connected to the same Wi-Fi network as your phone</Text>
    </Container>
  );
};

export default OfflineScreen;
