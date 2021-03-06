import React from 'react';
import styled from 'styled-components/native';

const ViewCentral = styled.SafeAreaView`
  flex:1;
  flex-direction:column;
  justifyContent:space-between;
`;
const TextT = styled.Text`
  textAlign: left;
  fontSize:25px;
  font-weight:bold;
  padding:13px;
`;
const GroupText = styled.View`
  flex:1;
  flex-direction:column;
  margin:10px;
`;
const TextItem = styled.Text`
textAlign: left;
fontSize:20px;
font-weight:bold;
padding:13px;
`;

const DonateR = () => {
  return (
    <ViewCentral>
      
      <GroupText>
        <TextItem>Condicoes basicas</TextItem>
        <TextItem>Quem nao pode </TextItem>
        <TextItem>No dia da doacao</TextItem>
        <TextItem>Oque acontece com o sangue doado</TextItem>
        <TextItem>Intervelo entre doacoes </TextItem>
      </GroupText>
    </ViewCentral>
  )
}
DonateR.navigationOptions = () => {
  return {
    title: 'Regras para Doar Sangue',
    headerStyle: {
      backgroundColor: '#00C2CB',
      height: 80,
    },
    headerTintColor: '#fff',
    headerTitleAlign: 'center',
} 

}

export default DonateR;