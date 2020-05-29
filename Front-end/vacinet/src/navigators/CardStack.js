import { createStackNavigator } from 'react-navigation-stack';

import Cards from '../screens/Cards/Cards';
import Cartao from '../screens/Cards/Cartao';
import AddVacina from '../screens/Cards/AddVacina';

const CardStack = createStackNavigator({
  Cards:{
    screen:Cards
  },
  Cartao:{
    screen:Cartao
  },
  AddVacina:{
    screen:AddVacina
  }
})

export default CardStack;