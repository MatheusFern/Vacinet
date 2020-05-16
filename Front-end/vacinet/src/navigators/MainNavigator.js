
import { createBottomTabNavigator } from 'react-navigation-tabs';
import CustomTab from '../components/CustomTab';
import React from 'react';



import HomeStack from '../navigators/HomeStack';
import HeathStack from '../navigators/HeathStack';
import CardStack from '../navigators/CardStack';
import ServicesStack from '../navigators/ServicesStack';
import PerfilStack from '../navigators/PerfilStack';

const MainNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeStack
  },

  MinhaSaude: {
    screen: HeathStack
  },
  Cartao: {
    screen: CardStack
  },
  Servicos: {
    screen: ServicesStack
  },
  Perfil: {
    screen: PerfilStack
  },
}, {
  tabBarOptions: {

  },
  defaultNavigationOptions: {
   
    tabBarComponent: (props) => (
      <CustomTab
        {...props}
        items={[
          { text: 'Home', route: 'Home' },
          { text: 'Minha Saude', route: 'MinhaSaude' },
          { text: 'Cartao', route: 'Cartao' },
          { text: 'Servicos', route: 'Servicos' },
          { text: 'Perfil', route: 'Perfil' }

        ]}
      />
    )
    
  }
}

);
export default MainNavigator;




/* Welcome:{
    screen:Welcome
  },
  Login:{
    screen:Login
  },
  Home:{
    screen:Home
  },
  Cadastro:{
    screen:Cadastro
  }
});
*/