import styled from 'styled-components/native';
import {Platform, StatusBar} from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  align-items: center;
`;

export const HeaderWrapper = styled.View`
  width: 100%;
  background-color: ${({isRunning}) => (isRunning ? '#8BC34A' : '#1565C0')};
  padding-top: ${Platform.OS === 'ios'
    ? '50px'
    : `${StatusBar.currentHeight + 20}px`};
  padding-bottom: 20px;
  align-items: center;
`;

export const Header = styled.Text`
  color: ${({isRunning}) => (isRunning ? '#000000' : '#FFFFFF')};
  font-size: 26px;
  font-weight: bold;
`;

export const Logo = styled.View`
  margin-top: 30px;
  margin-bottom: 50px;
`;

export const StopButton = styled.TouchableOpacity`
  background-color: #ffffff;
  border: 2px solid red;
  padding: 15px 40px;
  border-radius: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 180px;
  align-items: center;
`;

export const StartButton = styled.TouchableOpacity`
  background-color: #ffffff;
  border: 2px solid #1565c0;
  padding: 15px 40px;
  border-radius: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 180px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: black;
  font-size: 16px;
  font-weight: bold;
`;

export const CenterImageWrapper = styled.View`
  margin-top: 40px;
  align-items: center;
`;

export const WaterDropWrapper = styled.View`
  margin-top: 20px;
  align-items: center;
`;

export const FlushingText = styled.Text`
  font-size: 18px;
  color: #000000;
  font-weight: bold;
  margin-top: 10px;
  position: absolute;
  top: 290px;
  text-align: center;
  width: 100%;
  z-index: 5;
`;
