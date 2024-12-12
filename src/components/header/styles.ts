import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

export const SafeAreaView = styled.SafeAreaView<{bgColor: string}>`
  background-color: ${({bgColor}) => bgColor || '#1565c0'};
`;

export const HeaderContainer = styled.View`
  width: ${width}px;
  padding: 10px 0;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #ffffff;
  font-size: 26px;
  font-weight: bold;
`;
