import React from 'react';
import styled from 'styled-components/native';

const ViewTransplant = styled.SafeAreaView`
  flex:1;
  flex-direction:column;
  padding:13px;
  
`;
const TextT = styled.Text`
  textAlign: left;
  fontSize:20px;
  font-weight:bold;
  padding:13px;
`;
const GroupText = styled.View`
flex:1;
  flex-direction:column;
`;
const TextTelefone = styled.Text`
fontSize:40px; 
color:#00C2CB;
font-weight:bold;
`;
const Transplant =  (props) => {
  return (
    <ViewTransplant>
      <TextT>Ligue</TextT>
      <TextTelefone> 0800 644 6445</TextTelefone>
      <TextT>Saiba tudo sobre Doacao</TextT>
      <GroupText>
        <TextT>- Oque e doacao de Orgaos </TextT>
        <TextT>- Quero ser doador de Orgaos</TextT>
        <TextT>- Quais orgaos eu posso doar</TextT>

      </GroupText>
    </ViewTransplant>
  )
}

Transplant.navigationOptions = () => {
  return {
    title: 'Transplante'
  }
}

export default Transplant;