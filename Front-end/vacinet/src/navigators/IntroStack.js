import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';

import Welcome from '../screens/Intro/Welcome';
import Login from '../screens/Intro/Login';
import Cadastro from '../screens/Intro/Cadastro';
import MainNavigator from '../navigators/MainNavigator';
import CadastroSub from '../screens/Intro/Cadastro2';
import SenhaLost from '../screens/Intro/Senha';

const IntroStack = createStackNavigator({
  Welcome:{
    screen:Welcome
  },
  Login:{
    screen:Login
  },
  MainNavigator:{
    screen:MainNavigator
  },
  Cadastro:{
    screen:Cadastro
  },
  CadastroSub:{
    screen:CadastroSub
  },
  SenhaLost:{
    screen:SenhaLost
  }

},
 {
   defaultNavigationOptions:{
     headerShown:false
   }
 }
);

export default IntroStack;