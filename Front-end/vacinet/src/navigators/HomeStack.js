import { createStackNavigator } from 'react-navigation-stack';

import IMC from '../screens/Home/IMC';
import Home from '../screens/Home/Home';
import Donate from '../screens/Home/Donate/DonateP';
import Transplant from '../screens/Home/Transplant';
import Exams from '../screens/Home/Exams';
import DonateL from '../screens/Home/Donate/DonateL'

const HomeStack = createStackNavigator({
  Home: {
    screen: Home
  },
  IMC: {
    screen: IMC
  },
  Donate: {
    screen: Donate
  },
  Transplant: {
    screen: Transplant
  },
  Exams: {
    screen: Exams
  },
  DonateL:{
    screen:DonateL
  }

});

export default HomeStack;