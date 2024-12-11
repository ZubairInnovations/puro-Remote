import React from 'react';
import {FlatList, Modal} from 'react-native';
import {
  DataCard,
  DataText,
  ModalOverlay,
  ModalContent,
  CloseButton,
  CloseButtonText,
  styles,
} from './styles';

interface CustomModalProps {
  visible: boolean;
  onClose: () => void;
}

const CustomModal: React.FC<CustomModalProps> = ({visible, onClose}) => {
  const data = [
    {label: 'Product TDS', value: '30'},
    {label: 'Liter Left', value: '200'},
    {label: 'Product Flow', value: '0.0'},
    {label: 'Drain Flow', value: '0.0'},
    {label: 'Recycle Flow', value: '0.0'},
    {label: 'System Recovery', value: '0%'},
    {label: 'Feed TDS', value: '0'},
    {label: 'Rejection Rate', value: '0.0%'},
    {label: 'Membrane Pressure', value: '0.3'},
    {label: 'Feed Pressure', value: '0.1'},
    {label: 'Water Temperature', value: '24.0°C'},
  ];

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
      style={styles.modal}>
      <ModalOverlay>
        <ModalContent>
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            renderItem={({item, index}) => (
              <DataCard key={index}>
                <DataText>
                  {item.label}: {item.value}
                </DataText>
              </DataCard>
            )}
          />
          <CloseButton onPress={onClose}>
            <CloseButtonText>Close</CloseButtonText>
          </CloseButton>
        </ModalContent>
      </ModalOverlay>
    </Modal>
  );
};

export default CustomModal;