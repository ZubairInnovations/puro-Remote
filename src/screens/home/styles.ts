import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  align-items: center;
`;

export const Logo = styled.View`
  margin-top: 30px;
  margin-bottom: 50px;
`;

export const LitersText = styled.Text`
  font-size: 18px;
  color: black;
  margin-bottom: 5px;
`;

export const Underline = styled.View`
  width: 150px;
  height: 1px;
  background-color: black;
  margin-bottom: 20px;
`;

export const StartButton = styled.TouchableOpacity`
  background-color: #ffffff;
  border: 2px solid #1565c0;
  padding: 15px 40px;
  border-radius: 30px;
  margin-top: 10px;
`;

export const ButtonText = styled.Text`
  color: black;
  font-size: 16px;
  font-weight: bold;
`;

export const CenterSvgWrapper = styled.View`
  margin-top: 100px;
  align-items: center;
`;

export const ManualIconWrapper = styled.View`
  position: absolute;
  right: 10px;
  bottom: 60px;
`;

export const CenterImageWrapper = styled.View`
  margin-top: 50px;
  align-items: center;
`;
