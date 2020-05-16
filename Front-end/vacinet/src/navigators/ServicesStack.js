import { createStackNavigator } from 'react-navigation-stack';

import Services from '../screens/Servicos/Services';
import Hospital from '../screens/Servicos/Hospital';
import Postos from '../screens/Servicos/Postos';
import Urgencia from '../screens/Servicos/Urgencia';
import Farmacias from '../screens/Servicos/Farmacias';


const ServicesStack = createStackNavigator({
  Services:{
    screen:Services
  },
  Hospital:{
    screen:Hospital
  },
  Postos:{
    screen:Postos
  },
  Urgencia:{
    screen:Urgencia
  },
  Farmacias:{
    screen:Farmacias
  }
})

export default ServicesStack; 
