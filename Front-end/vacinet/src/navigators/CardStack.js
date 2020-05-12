import { createStackNavigator } from 'react-navigation-stack';

import Cards from '../screens/Cards/Cards';

const CardStack = createStackNavigator({
  Cards:{
    screen:Cards
  }
})

export default CardStack;