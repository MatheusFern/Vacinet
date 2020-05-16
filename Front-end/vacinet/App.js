
import { createAppContainer } from 'react-navigation';


import IntroStack from './src/navigators/IntroStack';

export default createAppContainer(IntroStack);

/*

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
import BemVindo from './src/components/BemVindo';
import Servicos from './src/components/Servicos';
import Donate from './src/components/Donate/Donate';
import DonateP from './src/components/Donate/DonateP';
import Tranplant from './src/components/Transplant/Transplant';
import Login from './src/components/Login';
import DonateAdd from './src/components/Donate/DonateAdd';
import Ficha from './src/components/Ficha';

const Page = styled.SafeAreaView`
  flex:1;
  flex-direction:column;
  justifyContent:space-between;
`;

export default () => {
  return (
    <Page >
       <Ficha/>
    </Page>
  )
};

*/
