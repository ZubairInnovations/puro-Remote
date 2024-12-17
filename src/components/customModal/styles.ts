import {StyleSheet, Dimensions} from 'react-native';
import styled from 'styled-components/native';
const {width} = Dimensions.get('window');

export const DataCard = styled.View`
  width: 100%;
  height: 40px;
  border: 2px solid #2196f3;
  margin-bottom: 5px;
  padding: 5px;
  background-color: #ffffff;
  justify-content: flex-end;
  align-items: center;
  border-radius: 20px;
`;

export const DataText = styled.Text`
  font-size: 14px;
  color: #333333;
  font-weight: 500;
  text-align: center;
  flex-wrap: wrap;
`;

export const ModalOverlay = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.View`
  width: ${width - 70}px;
  background-color: #fff;
  padding: 20px;
  align-items: center;
  margin-top: 200px;
`;

export const styles = StyleSheet.create({
  modal: {
    flex: 1,
  },
});
