import { createStackNavigator } from 'react-navigation-stack';

import Perfil from '../screens/Perfil/Perfil';

const PerfilStack = createStackNavigator({
  Perfil:{
    screen:Perfil
  }
})

export default PerfilStack; 
