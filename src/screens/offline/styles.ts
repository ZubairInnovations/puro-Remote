import styled from 'styled-components/native';
import {Platform, StatusBar} from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff; 
  align-items: center;
`;

export const HeaderWrapper = styled.View`
  width: 100%;
  background-color: grey; 
  padding-top: ${Platform.OS === 'ios' ? '50px' : `${StatusBar.currentHeight + 20}px`};
  padding-bottom: 20px; 
  align-items: center; 
`;

export const Header = styled.Text`
  color: black; 
  font-size: 26px; 
  font-weight: bold; 
`;

export const Logo = styled.View`
  margin-top: 30px; 
  margin-bottom: 50px; 
`;

export const MessageText = styled.Text`
  font-size: 19px;
  font-weight: bold;
  color: black; 
  margin-top: 2px; 
`;

export const InfoText = styled.Text`
  font-size: 16px;
  color: black; 
  text-align: center; 
  margin-top: 25px; 
  padding: 0 20px; 
`;

export const CenterImageWrapper = styled.View`
  margin-top: 100px; 
  align-items: center;
`;

export const ManualIconWrapper = styled.View`
  position: absolute;
  right: 10px; 
  bottom: 60px; 
`;
