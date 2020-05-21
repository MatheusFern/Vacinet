import React from 'react';
import styled from 'styled-components/native';

const BoxView = styled.View`
  
  flexDirection: column;
  align-items:flex-start;
  justifyContent:center;
  margin:5px;
  
`;
const Texto = styled.Text`
  fontSize:15px;
  font-weight:bold;
  padding:5px;
`;
const GroupText = styled.View`
background-color:#EEE;
textAlign: left;
border-radius:15px;

`;

const DonateList = (props) => {
  return (
    <BoxView>
      <GroupText>
      <Texto>Dada da doacao: {props.data.date}</Texto>
      <Texto>Local da doacao:{props.data.local}</Texto>
      <Texto>Bolsas de sangue doadas: {props.data.qntBolsas}</Texto>
      </GroupText>
    </BoxView>
  )
}
export default DonateList;