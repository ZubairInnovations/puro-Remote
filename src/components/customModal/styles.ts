import {StyleSheet, Dimensions} from 'react-native';
import styled from 'styled-components/native';
const {width} = Dimensions.get('window');

export const DataCard = styled.View`
  height: 60px;
  border: 2px solid #2196f3;
  margin-bottom: 8px;
  padding: 16px;
  background-color: #ffffff;
  justify-content: center;
  border-radius: 30px;
`;

export const DataText = styled.Text`
  font-size: 16px;
  color: #333333;
  font-weight: 500;
  text-align: center;
`;

export const ShowButton = styled.TouchableOpacity`
  background-color: #2196f3;
  padding: 15px;
  border-radius: 10px;
`;

export const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

export const ModalOverlay = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.View`
  max-height: 60%;
  width: ${width - 50}px;
  background-color: #fff;
  border-radius: 20px;
  padding: 20px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-bottom: 12px;
`;

export const CloseButton = styled.TouchableOpacity`
  margin-top: 20px;
  background-color: #2196f3;
  padding: 10px;
  border-radius: 10px;
`;

export const CloseButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  text-align: center;
`;

export const styles = StyleSheet.create({
  modal: {
    flex: 1,
  },
});
