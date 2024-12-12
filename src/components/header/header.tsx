import React from 'react';
import {HeaderContainer, Title, SafeAreaView} from './styles';

interface HeaderProps {
  title: string;
  bgColor?: string;
}

const Header: React.FC<HeaderProps> = ({title, bgColor = '#1565c0'}) => {
  return (
    <SafeAreaView bgColor={bgColor}>
      <HeaderContainer>
        <Title>{title || ''}</Title>
      </HeaderContainer>
    </SafeAreaView>
  );
};

export default Header;
