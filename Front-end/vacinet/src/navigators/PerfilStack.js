import { createStackNavigator } from 'react-navigation-stack';

import Perfil from '../screens/Perfil/Perfil';
import MyData from '../screens/Perfil/MyData';

const PerfilStack = createStackNavigator({
  Perfil:{
    screen:Perfil
  },
  MyData:{
    screen:MyData
  }
})

export default PerfilStack; 
