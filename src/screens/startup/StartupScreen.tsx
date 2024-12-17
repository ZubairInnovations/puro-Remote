import React, {useState} from 'react';
import {Image} from 'react-native';
import {
  Container,
  Logo,
  StopButton,
  StartButton,
  ButtonText,
  CenterImageWrapper,
  WaterDropWrapper,
  HeaderWrapper,
  TopHeader,
  Header,
  LogicText,
} from './styles';
import {useNavigation} from '@react-navigation/native';
import CustomModal from '../../components/customModal/customModal';
import {LogoPng, MembraneFilterPng} from '../../assets/images';

const StartupScreen = () => {
  const navigation = useNavigation();
  const [isCardDataVisible, setCardDataVisible] = useState(false);

  const handleStop = () => {
    navigation.navigate('Alarm');
  };

  const handleViewData = () => {
    setCardDataVisible(true);
  };

  const handleCloseCardData = () => {
    setCardDataVisible(false);
  };

  return (
    <>
      <Container>
        <HeaderWrapper>
          <TopHeader>puRO</TopHeader>
        </HeaderWrapper>

        <Header>puRO is Running...</Header>
        <Logo>
          <Image source={LogoPng} style={{width: 190, height: 150}} />
        </Logo>
        <LogicText>Logic is Achieved</LogicText>

        <StopButton onPress={handleStop}>
          <ButtonText>Stop</ButtonText>
        </StopButton>
        <StartButton onPress={handleViewData}>
          <ButtonText>View Data</ButtonText>
        </StartButton>

        <CenterImageWrapper>
          <WaterDropWrapper>
            <Image
              source={MembraneFilterPng}
              style={{width: 200, height: 180}}
            />
          </WaterDropWrapper>
        </CenterImageWrapper>
      </Container>

      {isCardDataVisible && (
        <CustomModal
          visible={isCardDataVisible}
          onClose={handleCloseCardData}
        />
      )}
    </>
  );
};

export default StartupScreen;
