import React, { useState } from 'react';
import styled from 'styled-components/native';
import ListaD from '../Donate/ListaD';
import DonateList from './DonateList';
import DonateAdd from './DonateAdd';
import DonateP from './DonateP';

const DonateL = () => {
  const [items, setItems] = useState(ListaD);
  
  return(
    <DonateAdd items={items} setItems={setItems} />
  )
}
DonateL.navigationOptions = () => {
  return {
    title: 'Registrar Doacao de sangue',
    headerStyle: {
      backgroundColor: '#00C2CB',
      height: 80,
    },
    headerTintColor: '#fff',
    headerTitleAlign: 'center',
  }
}
export default DonateL;