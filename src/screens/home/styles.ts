import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #e3f2fd;
`;

export const Header = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #1565c0;
  margin-bottom: 20px;
`;

export const Logo = styled.View`
  margin-bottom: 40px;
`;

export const StartButton = styled.TouchableOpacity`
  background-color: #1565c0;
  padding: 15px 40px;
  border-radius: 5px;
  margin-top: 20px;
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
`;
