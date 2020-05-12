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
export default DonateL;