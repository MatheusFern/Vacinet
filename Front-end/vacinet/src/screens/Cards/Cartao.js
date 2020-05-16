import React from 'react';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
flex:1;
flex-direction:column;

`;
const TextRegistro = styled.Text`
textAlign: left;
  fontSize:25px;
  font-weight:bold;
  padding:13px;
`;
const GroupItens = styled.View`
margin-left:15px;
width:90%;
background-color:#FFF;
padding :13px;
border-radius:15px;


`;
const TextT = styled.Text`
fontSize:20px;
  font-weight:bold;
`;
const Text = styled.Text`
fontSize:20px;
font-weight:bold;
`;

const Cartao = () => {
  return (
    <Container>
      <TextRegistro  >Ultimas Vacinas</TextRegistro>

      <GroupItens>
        <TextT>Vacina contra Tetano </TextT>
        <Text>Data:21/06/2019</Text>
        <Text>Hora: 13:17 </Text>
        
      </GroupItens>
      
    </Container>
  )
}

export default Cartao;
