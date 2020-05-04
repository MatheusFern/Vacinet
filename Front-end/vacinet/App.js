import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { Button } from 'native-base';


//components

import Header from './src/components/Header';
import Home from './src/components/Home';
import NavBarD from './src/components/NavBarD';
import IMC from './src/components/IMC';
import Cadastro from './src/components/cadastro';
import Perfil from './src/components/Perfil';




const Page = styled.SafeAreaView`
  flex:1;
  flex-direction:column;
  justifyContent:space-between;
`;

export default () => {
  return (
    <Page >
      <Header/>
      <Home/>
      <NavBarD/>      
    </Page>
  )
};
