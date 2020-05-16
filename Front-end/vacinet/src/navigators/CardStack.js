import { createStackNavigator } from 'react-navigation-stack';

import Cards from '../screens/Cards/Cards';
import Cartao from '../screens/Cards/Cartao';

const CardStack = createStackNavigator({
  Cards:{
    screen:Cards
  },
  Cartao:{
    screen:Cartao
  }
})

export default CardStack;