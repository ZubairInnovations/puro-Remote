import React from 'react';
import { Container, DataCard, DataText } from './styles';

const CardData = () => {
  const data = [
    { label: 'Product TDS', value: '30' },
    { label: 'Liter Left', value: '200' },
    { label: 'Product Flow', value: '0.0' },
    { label: 'Drain Flow', value: '0.0' },
    { label: 'Recycle Flow', value: '0.0' },
    { label: 'System Recovery', value: '0%' },
    { label: 'Feed TDS', value: '0' },
    { label: 'Rejection Rate', value: '0.0%' },
    { label: 'Membrane Pressure', value: '0.3' },
    { label: 'Feed Pressure', value: '0.1' },
    { label: 'Water Temperature', value: '24.0°C' },
  ];

  return (
    <Container>
      {data.map((item, index) => (
        <DataCard key={index}>
          <DataText>
            {item.label}: {item.value}
          </DataText>
        </DataCard>
      ))}
    </Container>
  );
};

export default CardData;
