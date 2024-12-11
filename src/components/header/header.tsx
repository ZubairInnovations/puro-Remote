import React from 'react';
import {HeaderContainer, Title, SafeAreaView} from './styles';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({title}) => {
  return (
    <SafeAreaView>
      <HeaderContainer>
        <Title>{title || ''}</Title>
      </HeaderContainer>
    </SafeAreaView>
  );
};

export default Header;
