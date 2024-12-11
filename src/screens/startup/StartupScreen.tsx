import React, {useState} from 'react';
import {
  Container,
  HeaderWrapper,
  Header,
  Logo,
  StopButton,
  StartButton,
  ButtonText,
  CenterSvgWrapper,
  WaterDropWrapper,
} from './styles';
import {WaterDropSvg, LogoSvg} from '../../assets/svgs';
import {useNavigation} from '@react-navigation/native';
import CardData from '../../components/customModal/customModal';
import CustomModal from '../../components/customModal/customModal';

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
          <Header>Connected</Header>
        </HeaderWrapper>
        <Logo>
          <LogoSvg width={150} height={150} />
        </Logo>
        <StopButton onPress={handleStop}>
          <ButtonText>Stop</ButtonText>
        </StopButton>
        <StartButton onPress={handleViewData}>
          <ButtonText>View Data</ButtonText>
        </StartButton>
        <CenterSvgWrapper>
          <WaterDropWrapper>
            <WaterDropSvg width={180} height={180} />
          </WaterDropWrapper>
        </CenterSvgWrapper>
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
