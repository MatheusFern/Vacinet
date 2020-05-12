import { createStackNavigator } from 'react-navigation-stack';

import Saude from '../screens/Saude/Saude'


const HeathStack =createStackNavigator({
  Saude:{
    screen:Saude
  }
})

export default HeathStack;