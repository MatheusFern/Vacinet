import { createStackNavigator } from 'react-navigation-stack';

import Services from '../screens/Servicos/Services';

const ServicesStack = createStackNavigator({
  Services:{
    screen:Services
  }
})

export default ServicesStack; 
